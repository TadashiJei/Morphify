import pandas as pd
import numpy as np

def generate_mock_data(num_samples=1000):
    """Generates a mock dataset for credit scoring and saves it to a CSV file."""
    np.random.seed(42)

    data = {
        'wallet_age_days': np.random.randint(1, 1500, size=num_samples),
        'transaction_count': np.random.randint(5, 5000, size=num_samples),
        'total_sent_usd': np.random.uniform(100, 500000, size=num_samples),
        'total_received_usd': np.random.uniform(100, 500000, size=num_samples),
        'contracts_interacted_with': np.random.randint(1, 200, size=num_samples),
        'past_loans_count': np.random.randint(0, 50, size=num_samples),
    }

    # Ensure repaid loans are not more than total loans
    data['past_loans_repaid_count'] = np.random.randint(0, data['past_loans_count'] + 1, size=num_samples)
    # Ensure repaid count is 0 if past_loans_count is 0
    data['past_loans_repaid_count'] = np.where(data['past_loans_count'] == 0, 0, data['past_loans_repaid_count'])


    # --- High-Signal Default Logic ---
    # This logic creates a much clearer, stronger relationship between features and outcome.

    # Feature 1: Repayment History (very high weight)
    # A perfect repayment rate is a very strong positive signal.
    repayment_rate = data['past_loans_repaid_count'] / (data['past_loans_count'] + 1e-6)
    score = repayment_rate * 0.6

    # Feature 2: Financial Stability (Net USD Flow)
    # Positive net flow is a good sign.
    net_flow = data['total_received_usd'] - data['total_sent_usd']
    score += np.clip(net_flow / 100000, -0.2, 0.2) # Capped influence

    # Feature 3: Wallet Maturity & Activity
    # Older wallets with consistent activity are more trustworthy.
    wallet_maturity_score = np.log1p(data['wallet_age_days']) / np.log1p(1500)
    score += wallet_maturity_score * 0.1

    # Create a clear probability of NOT defaulting
    # The score is now a direct representation of creditworthiness.
    p_no_default = np.clip(score, 0.1, 0.95) # Bound the probability

    # Add minimal noise to simulate real-world uncertainty
    p_no_default += np.random.normal(0, 0.02, size=num_samples)
    p_no_default = np.clip(p_no_default, 0, 1)

    # Determine default based on this clear probability
    data['loan_default'] = (np.random.rand(num_samples) > p_no_default).astype(int)

    df = pd.DataFrame(data)
    df.to_csv('credit_data.csv', index=False)
    print(f"Generated mock data with {num_samples} samples and saved to credit_data.csv")

if __name__ == "__main__":
    generate_mock_data()
