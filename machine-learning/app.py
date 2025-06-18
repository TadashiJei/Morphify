from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
model = joblib.load('credit_score_model.joblib')

def calculate_credit_score(probability_of_no_default):
    """Converts a probability into a credit score on a scale of 300-850."""
    # Simple linear scaling
    min_score = 300
    max_score = 850
    return int(min_score + (max_score - min_score) * probability_of_no_default)

@app.route('/predict', methods=['POST'])
def predict():
    """Receives user data and returns a credit score."""
    data = request.get_json()
    
    # Basic validation
    if not data:
        return jsonify({"error": "Invalid input"}), 400

    try:
        # --- Feature Engineering (must match training) ---
        epsilon = 1e-6
        data['repayment_rate'] = data.get('past_loans_repaid_count', 0) / (data.get('past_loans_count', 0) + epsilon)
        data['net_flow_usd'] = data.get('total_received_usd', 0) - data.get('total_sent_usd', 0)
        # Use 1 for wallet_age_days if it's 0 to avoid division by zero
        data['transactions_per_day'] = data.get('transaction_count', 0) / (data.get('wallet_age_days', 1) + epsilon)

        # Ensure the feature order matches the training order
        feature_order = [
            'wallet_age_days',
            'transaction_count',
            'total_sent_usd',
            'total_received_usd',
            'contracts_interacted_with',
            'repayment_rate',
            'net_flow_usd',
            'transactions_per_day'
        ]
        
        features_df = pd.DataFrame([data])[feature_order]

        # Predict the probability of not defaulting (class 1)
        # The model is a pipeline, so it will handle scaling
        prediction_proba = model.predict_proba(features_df)[:, 1]

        # Convert probability to a credit score
        credit_score = calculate_credit_score(prediction_proba[0])

        return jsonify({"credit_score": credit_score})

    except (KeyError, TypeError) as e:
        return jsonify({"error": f"Missing or invalid feature in input: {e}"}), 400
    except Exception as e:
        app.logger.error(f"Prediction error: {e}", exc_info=True)
        return jsonify({"error": f"An error occurred: {e}"}), 500

# Make the script runnable
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001, debug=True, use_reloader=False)
