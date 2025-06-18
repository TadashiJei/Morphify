const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DisputeResolution", function () {
  let owner, partyA, partyB;
  let disputeResolution, mockLoanContract;

  beforeEach(async function () {
    [owner, partyA, partyB] = await ethers.getSigners();

    // Deploy a mock loan contract address (can be any address for this test)
    mockLoanContract = ethers.Wallet.createRandom();

    // Deploy the DisputeResolution contract
    const DisputeResolution = await ethers.getContractFactory("DisputeResolution");
    disputeResolution = await DisputeResolution.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner/arbitrator", async function () {
      expect(await disputeResolution.owner()).to.equal(owner.address);
    });
  });

  describe("Initiating a Dispute", function () {
    it("Should allow a user to initiate a dispute", async function () {
      const reason = "Loan default";
      await disputeResolution.connect(partyA).initiateDispute(mockLoanContract.address, partyB.address, reason);

      const dispute = await disputeResolution.disputes(0);
      expect(dispute.complainant).to.equal(partyA.address);
      expect(dispute.defendant).to.equal(partyB.address);
      expect(dispute.reason).to.equal(reason);
      expect(dispute.status).to.equal(0); // Open
    });

    it("Should emit a DisputeOpened event", async function () {
        const reason = "Loan default";
        await expect(disputeResolution.connect(partyA).initiateDispute(mockLoanContract.address, partyB.address, reason))
            .to.emit(disputeResolution, "DisputeOpened")
            .withArgs(0, mockLoanContract.address, partyA.address);
    });
  });

  describe("Resolving a Dispute", function () {
    beforeEach(async function () {
        await disputeResolution.connect(partyA).initiateDispute(mockLoanContract.address, partyB.address, "Loan default");
    });

    it("Should allow the owner to resolve a dispute", async function () {
        await disputeResolution.connect(owner).resolveDispute(0, partyA.address);
        const dispute = await disputeResolution.disputes(0);
        expect(dispute.status).to.equal(1); // Resolved
    });

    it("Should emit a DisputeResolved event", async function () {
        await expect(disputeResolution.connect(owner).resolveDispute(0, partyA.address))
            .to.emit(disputeResolution, "DisputeResolved")
            .withArgs(0, partyA.address);
    });

    it("Should prevent non-owners from resolving a dispute", async function () {
        await expect(disputeResolution.connect(partyA).resolveDispute(0, partyA.address))
            .to.be.revertedWithCustomError(disputeResolution, 'OwnableUnauthorizedAccount');
    });

    it("Should prevent resolving a dispute with a winner who is not part of the dispute", async function () {
        const [, , , outsider] = await ethers.getSigners();
        await expect(disputeResolution.connect(owner).resolveDispute(0, outsider.address))
            .to.be.revertedWith("Winner must be a party to the dispute");
    });

    it("Should prevent resolving a dispute that is already resolved", async function () {
        await disputeResolution.connect(owner).resolveDispute(0, partyA.address);
        await expect(disputeResolution.connect(owner).resolveDispute(0, partyA.address))
            .to.be.revertedWith("Dispute is already resolved");
    });
  });
});
