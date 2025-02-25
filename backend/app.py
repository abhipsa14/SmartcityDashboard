# from flask import Flask, request, jsonify
# import numpy as np
# import joblib  # or use another library to load your model

# app = Flask(__name__)

# # Load your model (adjust to your model loading mechanism)
# model = joblib.load('')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json(force=True)
#     # Assume the input data is a JSON object containing a list of features
#     features = np.array(data['features']).reshape(1, -1)
    
#     prediction = model.predict(features)  # Run the prediction using the model
    
#     return jsonify({'prediction': prediction.tolist()})

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify, send_file
import numpy as np
import pandas as pd
import joblib
import matplotlib.pyplot as plt
from io import BytesIO
from pmdarima import ARIMA

# Initialize Flask app
app = Flask(__name__)

# Load the trained ARIMA model
with open('/backend/models/ts.joblib', 'rb') as f:
    model = joblib.load(f)

# Function to generate ARIMA forecast and plot the results
def arima_forecast(data, periods=10):
    # Generate forecast for the specified number of periods
    forecast, conf_int = model.predict(n_periods=periods, return_conf_int=True)

    # Create a time index for the forecast
    forecast_index = np.arange(len(data), len(data) + periods)

    # Plot the forecast
    plt.figure(figsize=(10, 5))
    plt.plot(np.arange(len(data)), data, label="Observed", color="blue")
    plt.plot(forecast_index, forecast, label="Forecast", color="red")
    plt.fill_between(forecast_index, conf_int[:, 0], conf_int[:, 1], color='pink', alpha=0.3)
    plt.title("ARIMA Forecast")
    plt.xlabel("Time")
    plt.ylabel("Value")
    plt.legend()

    # Save plot to a BytesIO object
    img = BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    return img

# Flask route to get the ARIMA chart
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request (from React frontend)
        data = request.json.get('data', [])

        if not data:
            return jsonify({'error': 'No data provided'}), 400

        # Convert data into a numpy array for ARIMA
        data = np.array(data)

        # Generate ARIMA forecast and chart
        img = arima_forecast(data)

        # Send the chart back as an image
        return send_file(img, mimetype='image/png')
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

