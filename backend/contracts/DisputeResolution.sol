// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title DisputeResolution
 * @dev Manages the dispute resolution process for loans.
 */
contract DisputeResolution is Ownable {
    struct Dispute {
        uint256 id;
        address loanContract;
        address complainant;
        address defendant;
        string reason;
        DisputeStatus status;
    }

    enum DisputeStatus { Open, Resolved }

    mapping(uint256 => Dispute) public disputes;
    uint256 public nextDisputeId;

    event DisputeOpened(uint256 indexed disputeId, address indexed loanContract, address indexed complainant);
    event DisputeResolved(uint256 indexed disputeId, address indexed winner);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Initiates a dispute for a given loan contract.
     * @param _loanContract The address of the loan contract in dispute.
     * @param _defendant The other party in the dispute.
     * @param _reason A description of the dispute.
     */
    function initiateDispute(address _loanContract, address _defendant, string memory _reason) external {
        uint256 disputeId = nextDisputeId++;
        disputes[disputeId] = Dispute({
            id: disputeId,
            loanContract: _loanContract,
            complainant: msg.sender,
            defendant: _defendant,
            reason: _reason,
            status: DisputeStatus.Open
        });
        emit DisputeOpened(disputeId, _loanContract, msg.sender);
    }

    /**
     * @dev Resolves a dispute in favor of one party.
     * Only the arbitrator (owner) can call this function.
     * @param _disputeId The ID of the dispute to resolve.
     * @param _winner The address of the party who won the dispute.
     */
    function resolveDispute(uint256 _disputeId, address _winner) external onlyOwner {
        Dispute storage disputeToResolve = disputes[_disputeId];
        require(disputeToResolve.status == DisputeStatus.Open, "Dispute is already resolved");
        require(
            _winner == disputeToResolve.complainant || _winner == disputeToResolve.defendant,
            "Winner must be a party to the dispute"
        );

        disputeToResolve.status = DisputeStatus.Resolved;
        // In a real implementation, this might trigger a fund transfer or other action.
        emit DisputeResolved(_disputeId, _winner);
    }
}
