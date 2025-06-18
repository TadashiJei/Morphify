const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("LoanContract", function () {
  let owner, lender, borrower;
  let stablecoin, reputation, loanContract;
  const principal = ethers.parseUnits("1000", 18);
  const interestRate = 500; // 5%
  const term = 30 * 24 * 60 * 60; // 30 days
  const initialScore = 600;

  beforeEach(async function () {
    [owner, lender, borrower] = await ethers.getSigners();

    // Deploy a mock ERC20 for the stablecoin
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    stablecoin = await MockERC20.deploy("Mock Stablecoin", "mUSD");

    // Deploy the Reputation contract
    const Reputation = await ethers.getContractFactory("Reputation");
    reputation = await Reputation.deploy();
    await reputation.initializeUser(borrower.address, initialScore);

    // Deploy the LoanContract
    const LoanContract = await ethers.getContractFactory("LoanContract");
    loanContract = await LoanContract.deploy(
      borrower.address,
      lender.address,
      await stablecoin.getAddress(),
      await reputation.getAddress(),
      principal,
      interestRate,
      term
    );

    // Fund the loan contract with the principal amount (simulating marketplace transfer)
    await stablecoin.mint(await loanContract.getAddress(), principal);
  });

  describe("Deployment", function () {
    it("Should set the correct loan parameters", async function () {
      expect(await loanContract.borrower()).to.equal(borrower.address);
      expect(await loanContract.lender()).to.equal(lender.address);
      expect(await loanContract.stablecoin()).to.equal(await stablecoin.getAddress());
      expect(await loanContract.principal()).to.equal(principal);
      expect(await loanContract.interestRate()).to.equal(interestRate);
      expect(await loanContract.term()).to.equal(term);
      expect(await loanContract.status()).to.equal(0); // Active
    });
  });

  describe("Disbursement", function () {
    it("Should allow the borrower to disburse the funds", async function () {
      const initialBorrowerBalance = await stablecoin.balanceOf(borrower.address);
      
      await loanContract.connect(borrower).disburse();

      const finalBorrowerBalance = await stablecoin.balanceOf(borrower.address);
      expect(finalBorrowerBalance).to.equal(initialBorrowerBalance + principal);

      const contractBalance = await stablecoin.balanceOf(await loanContract.getAddress());
      expect(contractBalance).to.equal(0);
      expect(await loanContract.disbursed()).to.be.true;
    });

    it("Should prevent anyone other than the borrower from disbursing", async function () {
      await expect(loanContract.connect(lender).disburse()).to.be.revertedWith("Only borrower can disburse");
    });

    it("Should prevent disbursing more than once", async function () {
      await loanContract.connect(borrower).disburse();
      await expect(loanContract.connect(borrower).disburse()).to.be.revertedWith("Loan already disbursed");
    });
  });

  describe("Repaying the Loan", function () {
    beforeEach(async function () {
      // Borrower disburses the loan first
      await loanContract.connect(borrower).disburse();
      
      // Mint funds to borrower and approve contract for repayment
      const totalOwed = principal + (principal * BigInt(interestRate)) / 10000n;
      await stablecoin.mint(borrower.address, totalOwed);
      await stablecoin.connect(borrower).approve(await loanContract.getAddress(), totalOwed);
    });

    it("Should allow the borrower to repay the loan and reward their reputation", async function () {
      const lenderInitialBalance = await stablecoin.balanceOf(lender.address);
      const totalOwed = principal + (principal * BigInt(interestRate)) / 10000n;

      await loanContract.connect(borrower).repay();

      const lenderFinalBalance = await stablecoin.balanceOf(lender.address);
      expect(lenderFinalBalance).to.equal(lenderInitialBalance + totalOwed);
      
      const loanStatus = await loanContract.status();
      expect(loanStatus).to.equal(1); // Repaid

      const finalScore = await reputation.getScore(borrower.address);
      const REPAYMENT_REWARD = 25;
      expect(finalScore).to.equal(BigInt(initialScore) + BigInt(REPAYMENT_REWARD));
    });

    it("Should prevent anyone other than the borrower from repaying", async function () {
        await expect(loanContract.connect(lender).repay()).to.be.revertedWith("Only borrower can repay");
    });
  });

  describe("Claiming Default", function () {
    it("Should allow the lender to claim a default and penalize reputation", async function () {
      // Fast forward time past the loan term
      await time.increase(term + 1);

      await loanContract.connect(lender).claimDefault();

      const loanStatus = await loanContract.status();
      expect(loanStatus).to.equal(2); // Defaulted

      const finalScore = await reputation.getScore(borrower.address);
      const DEFAULT_PENALTY = 50;
      expect(finalScore).to.equal(BigInt(initialScore) - BigInt(DEFAULT_PENALTY));
    });

    it("Should prevent claiming default before the term ends", async function () {
      await expect(loanContract.connect(lender).claimDefault()).to.be.revertedWith("Loan is not past due");
    });
    
    it("Should prevent anyone other than the lender from claiming default", async function () {
        await time.increase(term + 1);
        await expect(loanContract.connect(borrower).claimDefault()).to.be.revertedWith("Only lender can claim default");
    });
  });
});
