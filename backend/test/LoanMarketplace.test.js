const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoanMarketplace", function () {
  let owner, lender, borrower;
  let stablecoin, reputation, marketplace;

  beforeEach(async function () {
    [owner, lender, borrower] = await ethers.getSigners();

    // Deploy a mock ERC20 for the stablecoin
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    stablecoin = await MockERC20.deploy("Mock Stablecoin", "mUSD");

    // Deploy the Reputation contract
    const Reputation = await ethers.getContractFactory("Reputation");
    reputation = await Reputation.deploy();

    // Deploy the LoanMarketplace contract
    const LoanMarketplace = await ethers.getContractFactory("LoanMarketplace");
    marketplace = await LoanMarketplace.deploy(await stablecoin.getAddress(), await reputation.getAddress());

    // Mint some stablecoins to the lender and approve the marketplace to spend them
    await stablecoin.mint(lender.address, ethers.parseUnits("1000", 18));
    await stablecoin.connect(lender).approve(await marketplace.getAddress(), ethers.parseUnits("1000", 18));

    // Give the borrower a credit score
    await reputation.initializeUser(borrower.address, 600);
  });

  describe("Deployment", function () {
    it("Should set the right stablecoin and reputation addresses", async function () {
      expect(await marketplace.stablecoin()).to.equal(await stablecoin.getAddress());
      expect(await marketplace.reputationContract()).to.equal(await reputation.getAddress());
    });
  });

  describe("Depositing Funds", function () {
    it("Should allow a lender to deposit funds", async function () {
      const depositAmount = ethers.parseUnits("500", 18);
      await marketplace.connect(lender).deposit(depositAmount);

      const lenderBalance = await marketplace.lenderBalances(lender.address);
      expect(lenderBalance).to.equal(depositAmount);

      const marketplaceBalance = await stablecoin.balanceOf(await marketplace.getAddress());
      expect(marketplaceBalance).to.equal(depositAmount);
    });

    it("Should emit a FundsDeposited event", async function () {
        const depositAmount = ethers.parseUnits("500", 18);
        await expect(marketplace.connect(lender).deposit(depositAmount))
            .to.emit(marketplace, "FundsDeposited")
            .withArgs(lender.address, depositAmount);
    });
  });

    describe("Requesting a Loan", function () {
    it("Should allow a borrower to request a loan", async function () {
      const loanAmount = ethers.parseUnits("100", 18);
      const term = 30 * 24 * 60 * 60; // 30 days
      const interestRate = 500; // 5%

      await marketplace.connect(borrower).requestLoan(loanAmount, term, interestRate);

      const request = await marketplace.loanRequests(0);
      expect(request.borrower).to.equal(borrower.address);
      expect(request.amount).to.equal(loanAmount);
      expect(request.fulfilled).to.be.false;
    });

    it("Should emit a LoanRequested event", async function () {
        const loanAmount = ethers.parseUnits("100", 18);
        const term = 30 * 24 * 60 * 60; // 30 days
        const interestRate = 500; // 5%

        await expect(marketplace.connect(borrower).requestLoan(loanAmount, term, interestRate))
            .to.emit(marketplace, "LoanRequested")
            .withArgs(0, borrower.address, loanAmount, term, interestRate);
    });

    it("Should prevent a user with a low credit score from requesting a loan", async function () {
        const [, , , lowScoreBorrower] = await ethers.getSigners();
        await reputation.initializeUser(lowScoreBorrower.address, 400); // Initialize with low score
        const loanAmount = ethers.parseUnits("100", 18);
        const term = 30 * 24 * 60 * 60;
        const interestRate = 500;

        await expect(marketplace.connect(lowScoreBorrower).requestLoan(loanAmount, term, interestRate))
            .to.be.revertedWith("Insufficient credit score");
    });
  });

  describe("Funding a Loan", function () {
    beforeEach(async function () {
        // Lender deposits funds and borrower requests a loan
        await marketplace.connect(lender).deposit(ethers.parseUnits("500", 18));
        await marketplace.connect(borrower).requestLoan(ethers.parseUnits("100", 18), 30 * 24 * 60 * 60, 500);
    });

    it("Should allow a lender to fund a loan", async function () {
        await marketplace.connect(lender).fundLoan(0);

        const request = await marketplace.loanRequests(0);
        expect(request.fulfilled).to.be.true;

        const lenderBalance = await marketplace.lenderBalances(lender.address);
        expect(lenderBalance).to.equal(ethers.parseUnits("400", 18));
    });

    it("Should emit a LoanFunded event and create a new LoanContract", async function () {
        await expect(marketplace.connect(lender).fundLoan(0))
            .to.emit(marketplace, "LoanFunded");
        
        const request = await marketplace.loanRequests(0);
        const LoanContract = await ethers.getContractFactory("LoanContract");
        const loanContract = LoanContract.attach(request.loanContractAddress); // This line will fail, need to adjust contract

        expect(await loanContract.borrower()).to.equal(borrower.address);
    });
  });

  describe("Withdrawing Funds", function () {
    beforeEach(async function () {
        await marketplace.connect(lender).deposit(ethers.parseUnits("500", 18));
    });

    it("Should allow a lender to withdraw their funds", async function () {
        const withdrawAmount = ethers.parseUnits("200", 18);
        await marketplace.connect(lender).withdraw(withdrawAmount);

        const lenderBalance = await marketplace.lenderBalances(lender.address);
        expect(lenderBalance).to.equal(ethers.parseUnits("300", 18));

        const marketplaceBalance = await stablecoin.balanceOf(await marketplace.getAddress());
        expect(marketplaceBalance).to.equal(ethers.parseUnits("300", 18));
    });

    it("Should emit a FundsWithdrawn event", async function () {
        const withdrawAmount = ethers.parseUnits("200", 18);
        await expect(marketplace.connect(lender).withdraw(withdrawAmount))
            .to.emit(marketplace, "FundsWithdrawn")
            .withArgs(lender.address, withdrawAmount);
    });
  });
});
