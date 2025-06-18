// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

/**
 * @title Reputation
 * @dev Manages the "Morph Credit Score" for each user.
 * This contract will calculate, store, and update a reputation score
 * based on a user's on-chain activities.
 */
contract Reputation {
    // Constants for score changes
    uint256 private constant REPAYMENT_REWARD = 25;
    uint256 private constant DEFAULT_PENALTY = 50;

    // Mapping from user address to their Morph Credit Score
    mapping(address => uint256) public morphCreditScores;

    event ScoreUpdated(address indexed user, uint256 newScore);

    /**
     * @dev Initializes a user with a base score.
     * Can be called by an admin or a factory contract.
     */
    function initializeUser(address user, uint256 initialScore) public {
        require(morphCreditScores[user] == 0, "User already initialized");
        morphCreditScores[user] = initialScore;
        emit ScoreUpdated(user, initialScore);
    }

    /**
     * @dev Increases a user's score for a successful repayment.
     * Should only be callable by a LoanContract.
     */
    function rewardRepayment(address user) external {
        uint256 currentScore = morphCreditScores[user];
        uint256 newScore = currentScore + REPAYMENT_REWARD;
        morphCreditScores[user] = newScore;
        emit ScoreUpdated(user, newScore);
    }

    /**
     * @dev Decreases a user's score for a default.
     * Should only be callable by a LoanContract.
     */
    function penalizeDefault(address user) external {
        uint256 currentScore = morphCreditScores[user];
        // Prevent score from going below zero
        uint256 newScore = currentScore > DEFAULT_PENALTY ? currentScore - DEFAULT_PENALTY : 0;
        morphCreditScores[user] = newScore;
        emit ScoreUpdated(user, newScore);
    }

    /**
     * @dev Retrieves the Morph Credit Score for a user.
     */
    function getScore(address user) public view returns (uint256) {
        return morphCreditScores[user];
    }
}
