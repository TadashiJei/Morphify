import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from xgboost import XGBClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score
import joblib

def train_model():
    """Trains a credit scoring model and saves it to a file."""
    # Load the dataset
    df = pd.read_csv('credit_data.csv')

    # --- Advanced Feature Engineering ---
    # Adding a small constant (epsilon) to avoid division by zero
    epsilon = 1e-6
    df['repayment_rate'] = df['past_loans_repaid_count'] / (df['past_loans_count'] + epsilon)
    df['net_flow_usd'] = df['total_received_usd'] - df['total_sent_usd']
    df['transactions_per_day'] = df['transaction_count'] / (df['wallet_age_days'] + epsilon)

    # Define features (X) and target (y)
    features = [
        'wallet_age_days',
        'transaction_count',
        'total_sent_usd',
        'total_received_usd',
        'contracts_interacted_with',
        'repayment_rate',
        'net_flow_usd',
        'transactions_per_day'
    ]
    target = 'loan_default'

    X = df[features]
    y = df[target]

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    # Define the parameter grid to search
    param_grid = {
        'n_estimators': [100, 200],
        'learning_rate': [0.05, 0.1],
        'max_depth': [3, 4]
    }

    # Create a pipeline with StandardScaler and XGBClassifier
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('model', XGBClassifier(random_state=42, use_label_encoder=False, eval_metric='logloss'))
    ])

    # Define the parameter grid for XGBoost
    param_grid = {
        'model__n_estimators': [100, 200],
        'model__learning_rate': [0.05, 0.1],
        'model__max_depth': [3, 5] # Trying a slightly deeper tree
    }

    # Initialize GridSearchCV with the pipeline
    grid_search = GridSearchCV(estimator=pipeline, param_grid=param_grid, cv=3, n_jobs=-1, verbose=2)

    # Fit the grid search to the data
    grid_search.fit(X_train, y_train)

    # The best_estimator_ is now the entire fitted pipeline
    best_pipeline = grid_search.best_estimator_

    # Evaluate the best pipeline
    y_pred = best_pipeline.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)

    print(f"Best parameters found: {grid_search.best_params_}")
    print(f"Model trained with an accuracy of: {accuracy:.2f}")

    # Save the entire pipeline
    joblib.dump(best_pipeline, 'credit_score_model.joblib')
    print("Model saved to credit_score_model.joblib")

if __name__ == "__main__":
    train_model()
