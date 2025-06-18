const { ethers } = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 1. Deploy Reputation contract
  const Reputation = await ethers.getContractFactory("Reputation");
  const reputation = await Reputation.deploy();
  await reputation.waitForDeployment();
  console.log("Reputation contract deployed to:", await reputation.getAddress());

  // 2. Deploy MockERC20 (as our stablecoin for testing)
  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const stablecoin = await MockERC20.deploy("Mock Stablecoin", "mUSD");
  await stablecoin.waitForDeployment();
  console.log("MockERC20 (stablecoin) contract deployed to:", await stablecoin.getAddress());

  // 3. Deploy LoanMarketplace contract
  const LoanMarketplace = await ethers.getContractFactory("LoanMarketplace");
  const marketplace = await LoanMarketplace.deploy(
    await stablecoin.getAddress(),
    await reputation.getAddress()
  );
  await marketplace.waitForDeployment();
  console.log("LoanMarketplace contract deployed to:", await marketplace.getAddress());

  // 4. Deploy DisputeResolution contract
  const DisputeResolution = await ethers.getContractFactory("DisputeResolution");
  const disputeResolution = await DisputeResolution.deploy();
  await disputeResolution.waitForDeployment();
  console.log("DisputeResolution contract deployed to:", await disputeResolution.getAddress());

  console.log("\nAll contracts deployed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
