# Morphify Backend & Smart Contracts

## Overview
This directory contains the smart contracts and any supporting backend services that power the decentralized logic of the Morphify lending platform. The entire system is designed to be deployed on the Morph L2 network to ensure low transaction costs and high efficiency.

## Technology Stack
*   **Blockchain:** [Morph L2](https://www.morphl2.io/)
*   **Smart Contract Language:** [Solidity](https://soliditylang.org/)
*   **Development Environment:** [Hardhat](https://hardhat.org/) or [Foundry](https://getfoundry.sh/)
*   **Libraries:** [OpenZeppelin Contracts](https://www.openzeppelin.com/contracts) for secure, reusable components.

## Core Smart Contracts

1.  **`Reputation.sol`**
    *   **Purpose:** To calculate, store, and manage the "Morph Credit Score" for each user (wallet address).
    *   **Functionality:** It will aggregate on-chain data points, such as transaction history, loan repayment performance on Morphify, and potentially other dApp interactions, into a single, dynamic reputation score.

2.  **`LoanMarketplace.sol`**
    *   **Purpose:** To facilitate the P2P lending marketplace.
    *   **Functionality:** Manages the central lending pool where lenders can deposit stablecoins. It will also handle the creation of loan requests by borrowers and loan offers by lenders, matching them based on criteria like amount, term, and Morph Credit Score.

3.  **`LoanContract.sol` (Factory Pattern)**
    *   **Purpose:** To create and manage individual, automated loan agreements.
    *   **Functionality:** A new `LoanContract` is deployed for each matched loan. It handles the automated disbursement of funds to the borrower, manages the repayment schedule, calculates interest, and transfers repayments back to the lender or lending pool.

4.  **`DisputeResolution.sol`**
    *   **Purpose:** To provide a basic, on-chain mechanism for handling loan defaults or disputes.
    *   **Functionality (MVP):** Could involve a simple voting system or a trusted arbitrator role to resolve issues fairly.

## Architecture
*   The system will operate exclusively with stablecoins (e.g., USDT, cUSD) to avoid volatility risk.
*   The smart contracts will expose a clear and well-documented ABI for the frontend to interact with.
*   An off-chain listener service may be developed to monitor blockchain events and provide real-time updates to the frontend via a simple API, improving user experience.
