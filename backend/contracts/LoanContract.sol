// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Reputation.sol";

/**
 * @title LoanContract
 * @dev Manages an individual, automated loan agreement.
 */
contract LoanContract {
    // State variables
    address public borrower;
    address public lender;
    IERC20 public stablecoin;
    Reputation public reputationContract;
    uint256 public principal;
    uint256 public interestRate; // in basis points
    uint256 public term; // in seconds
    uint256 public creationDate;
    uint256 public amountRepaid;
    bool public disbursed;

    enum LoanStatus { Active, Repaid, Defaulted }
    LoanStatus public status;

    event Disbursed(address indexed borrower, uint256 amount);
    event Repaid(address indexed borrower, uint256 amount);
    event DefaultClaimed(address indexed lender);

    constructor(
        address _borrower,
        address _lender,
        address _stablecoinAddress,
        address _reputationAddress,
        uint256 _principal,
        uint256 _interestRate,
        uint256 _term
    ) {
        borrower = _borrower;
        lender = _lender;
        stablecoin = IERC20(_stablecoinAddress);
        reputationContract = Reputation(_reputationAddress);
        principal = _principal;
        interestRate = _interestRate;
        term = _term;
        creationDate = block.timestamp;
        status = LoanStatus.Active;
    }

    /**
     * @dev Allows the borrower to withdraw the loan principal.
     */
    function disburse() external {
        require(msg.sender == borrower, "Only borrower can disburse");
        require(!disbursed, "Loan already disbursed");
        disbursed = true;
        require(stablecoin.transfer(borrower, principal), "Disbursement failed");
        emit Disbursed(borrower, principal);
    }

    /**
     * @dev Allows the borrower to repay the loan.
     */
    function repay() external {
        require(msg.sender == borrower, "Only borrower can repay");
        require(status == LoanStatus.Active, "Loan is not active");

        uint256 totalOwed = principal + (principal * interestRate) / 10000;
        uint256 remainingOwed = totalOwed - amountRepaid;

        require(stablecoin.transferFrom(msg.sender, address(this), remainingOwed), "Repayment transfer failed");
        amountRepaid += remainingOwed;

        if (amountRepaid >= totalOwed) {
            status = LoanStatus.Repaid;
            reputationContract.rewardRepayment(borrower);
            require(stablecoin.transfer(lender, totalOwed), "Lender payment failed");
            emit Repaid(borrower, totalOwed);
        }
    }

    /**
     * @dev Allows the lender to claim a default if the loan is past due.
     */
    function claimDefault() external {
        require(msg.sender == lender, "Only lender can claim default");
        require(status == LoanStatus.Active, "Loan is not active");
        require(block.timestamp > creationDate + term, "Loan is not past due");

        status = LoanStatus.Defaulted;
        reputationContract.penalizeDefault(borrower);
        // In a real scenario, you might transfer remaining collateral or enact other penalties.
        // For now, we just update the status.
        emit DefaultClaimed(lender);
    }
}
