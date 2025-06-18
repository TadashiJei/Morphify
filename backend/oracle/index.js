require('dotenv').config();
const { ethers } = require('ethers');
const axios = require('axios');
const fs = require('fs');
const reputationABI = require('./abi/Reputation.json');

// --- Logger Setup ---
const logStream = fs.createWriteStream('oracle.log', { flags: 'a' });
const log = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    // Log to console and file
    console.log(logMessage.trim());
    logStream.write(logMessage);
};

// --- Configuration ---
const { RPC_URL, ORACLE_PRIVATE_KEY, REPUTATION_CONTRACT_ADDRESS, ML_API_URL } = process.env;

if (!RPC_URL || !ORACLE_PRIVATE_KEY || !REPUTATION_CONTRACT_ADDRESS || !ML_API_URL) {
    log("ERROR: Missing required environment variables. Please check your .env file.");
    process.exit(1);
}

// --- Ethers Setup ---
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(ORACLE_PRIVATE_KEY, provider);
const reputationContract = new ethers.Contract(REPUTATION_CONTRACT_ADDRESS, reputationABI, wallet);

log(`Oracle service connected to RPC at ${RPC_URL}`);
log(`Oracle wallet address: ${wallet.address}`);
log(`Watching Reputation contract at: ${REPUTATION_CONTRACT_ADDRESS}`);

// --- Mock Data (for demonstration) ---
// In a real application, this would come from a database or event listeners.
const usersToUpdate = [
    {
        address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', // Example address 1
        features: {
            wallet_age_days: 365,
            transaction_count: 100,
            total_sent_usd: 5000,
            total_received_usd: 10000,
            past_loans_count: 5,
            past_loans_repaid_count: 5,
            contracts_interacted_with: 10
        }
    },
    {
        address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', // Example address 2
        features: {
            wallet_age_days: 90,
            transaction_count: 20,
            total_sent_usd: 1000,
            total_received_usd: 500,
            past_loans_count: 2,
            past_loans_repaid_count: 1,
            contracts_interacted_with: 3
        }
    }
];

// --- Oracle Logic ---

/**
 * Fetches a credit score from the machine learning API.
 * @param {object} features - The user features to send to the API.
 * @returns {Promise<number|null>} The predicted credit score, or null if an error occurs.
 */
async function getCreditScore(features) {
    try {
        log(`Fetching score with features: ${JSON.stringify(features)}`);
        const response = await axios.post(ML_API_URL, features);
        const score = response.data.credit_score;
        log(`Received score from API: ${score}`);
        return score;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            log(`ERROR: API responded with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
        } else {
            // Something else happened while setting up the request
            log(`ERROR: Error fetching score from ML API: ${error.message}`);
        }
        return null;
    }
}

/**
 * Updates a user's credit score on the blockchain.
 * @param {string} userAddress - The user's Ethereum address.
 * @param {number} score - The credit score to set.
 */
async function updateScoreOnChain(userAddress, score) {
    try {
        log(`Updating score for ${userAddress} to ${score} on-chain...`);
        // The `initializeUser` function also serves to update the score.
        const tx = await reputationContract.initializeUser(userAddress, score);
        log(`Transaction sent: ${tx.hash}`);
        await tx.wait();
        log(`✅ Score successfully updated for ${userAddress} in transaction ${tx.hash}`);
    } catch (error) {
        log(`❌ ERROR: Failed to update score for ${userAddress}: ${error.message}`);
    }
}

/**
 * Main oracle loop to periodically update scores.
 */
async function runOracle() {
    log('\n--- Starting Oracle Update Cycle ---');
    for (const user of usersToUpdate) {
        const score = await getCreditScore(user.features);
        if (score !== null) {
            await updateScoreOnChain(user.address, score);
        }
        log('---');
    }
    log('--- Oracle Update Cycle Finished ---\n');
}

// --- Start the Oracle ---
async function main() {
    log('Oracle starting in 3 seconds to allow API to initialize...');
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay

    const UPDATE_INTERVAL_MS = 60 * 1000; // 1 minute

    runOracle();
    setInterval(runOracle, UPDATE_INTERVAL_MS);

    log(`Oracle started. Will update scores every ${UPDATE_INTERVAL_MS / 1000} seconds.`);
}

main();
