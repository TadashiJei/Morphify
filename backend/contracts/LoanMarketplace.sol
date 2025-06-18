// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Reputation.sol";
import "./LoanContract.sol";

/**
 * @title LoanMarketplace
 * @dev Facilitates the P2P lending marketplace.
 */
contract LoanMarketplace {
    IERC20 public stablecoin;
    Reputation public reputationContract;

    struct LoanRequest {
        uint256 id;
        address borrower;
        uint256 amount;
        uint256 term; // in seconds
        uint256 interestRate; // basis points (e.g., 500 = 5%)
        bool fulfilled;
        address loanContractAddress;
    }

    mapping(address => uint256) public lenderBalances;
    mapping(uint256 => LoanRequest) public loanRequests;
    uint256 public nextLoanRequestId;

    event FundsDeposited(address indexed lender, uint256 amount);
    event FundsWithdrawn(address indexed lender, uint256 amount);
    event LoanRequested(uint256 indexed requestId, address indexed borrower, uint256 amount, uint256 term, uint256 interestRate);
    event LoanFunded(uint256 indexed requestId, address indexed lender, address loanContract);

    constructor(address _stablecoinAddress, address _reputationAddress) {
        stablecoin = IERC20(_stablecoinAddress);
        reputationContract = Reputation(_reputationAddress);
    }

    /**
     * @dev Allows lenders to deposit stablecoins into the marketplace.
     * @param amount The amount of stablecoins to deposit.
     */
    function deposit(uint256 amount) external {
        require(amount > 0, "Deposit amount must be positive");
        lenderBalances[msg.sender] += amount;
        require(stablecoin.transferFrom(msg.sender, address(this), amount), "Deposit failed");
        emit FundsDeposited(msg.sender, amount);
    }

    /**
     * @dev Allows lenders to withdraw their deposited stablecoins.
     * @param amount The amount to withdraw.
     */
    function withdraw(uint256 amount) external {
        require(amount > 0, "Withdraw amount must be positive");
        require(lenderBalances[msg.sender] >= amount, "Insufficient balance");

        lenderBalances[msg.sender] -= amount;
        require(stablecoin.transfer(msg.sender, amount), "Withdrawal failed");

        emit FundsWithdrawn(msg.sender, amount);
    }

    /**
     * @dev Allows borrowers to request a new loan.
     * @param amount The amount of the loan requested.
     * @param term The duration of the loan in seconds.
     * @param interestRate The proposed interest rate in basis points.
     */
    function requestLoan(uint256 amount, uint256 term, uint256 interestRate) external {
        require(amount > 0, "Loan amount must be positive");
        uint256 creditScore = reputationContract.getScore(msg.sender);
        require(creditScore > 500, "Insufficient credit score"); // Example requirement

        uint256 requestId = nextLoanRequestId++;
        loanRequests[requestId] = LoanRequest({
            id: requestId,
            borrower: msg.sender,
            amount: amount,
            term: term,
            interestRate: interestRate,
            fulfilled: false,
            loanContractAddress: address(0)
        });

        emit LoanRequested(requestId, msg.sender, amount, term, interestRate);
    }

    /**
     * @dev Allows a lender to fund an existing loan request.
     * @param requestId The ID of the loan request to fund.
     */
    function fundLoan(uint256 requestId) external {
        LoanRequest storage request = loanRequests[requestId];
        require(request.id == requestId, "Loan request does not exist");
        require(!request.fulfilled, "Loan already fulfilled");
        require(lenderBalances[msg.sender] >= request.amount, "Insufficient balance");

        // Decrease lender's balance
        lenderBalances[msg.sender] -= request.amount;

        // Create and fund the new loan contract
        LoanContract newLoan = new LoanContract(
            request.borrower,
            msg.sender,
            address(stablecoin),
            address(reputationContract),
            request.amount,
            request.interestRate,
            request.term
        );

        address newLoanAddress = address(newLoan);
        request.loanContractAddress = newLoanAddress;

        // Transfer the principal to the new loan contract
        require(stablecoin.transfer(newLoanAddress, request.amount), "Funding failed");

        // Mark the request as fulfilled
        request.fulfilled = true;

        emit LoanFunded(requestId, msg.sender, newLoanAddress);
    }
}
