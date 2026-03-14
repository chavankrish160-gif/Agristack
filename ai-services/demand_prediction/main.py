from fastapi import FastAPI
from pydantic import BaseModel
from sklearn.ensemble import RandomForestRegressor
import numpy as np

app = FastAPI(title='eMandi Demand Prediction Service')

X = np.array([
    [18, 70, 1, 1],
    [22, 85, 1, 2],
    [15, 50, 0, 3],
    [30, 95, 1, 1],
    [20, 60, 0, 2],
])
y_price = np.array([20, 25, 17, 32, 21])
y_demand = np.array([68, 82, 44, 94, 58])

price_model = RandomForestRegressor(random_state=42, n_estimators=50).fit(X, y_price)
demand_model = RandomForestRegressor(random_state=42, n_estimators=50).fit(X, y_demand)

class DemandInput(BaseModel):
    historical_price: float
    market_demand: float
    location_score: int
    season_code: int

@app.get('/health')
def health():
    return {'ok': True, 'service': 'demand_prediction'}

@app.post('/predict')
def predict(payload: DemandInput):
    sample = np.array([[payload.historical_price, payload.market_demand, payload.location_score, payload.season_code]])
    predicted_price = float(price_model.predict(sample)[0])
    demand_level = float(demand_model.predict(sample)[0])
    return {
        'predicted_price': round(predicted_price, 2),
        'demand_level': round(demand_level, 2)
    }
