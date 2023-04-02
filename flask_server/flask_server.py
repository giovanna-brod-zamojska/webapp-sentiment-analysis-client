from flask import Flask, request, jsonify, render_template
from transformers import pipeline
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)


@app.route('/', methods=['GET'])
def home():
    message = 'Hello, Flask!'
    return render_template('index.html', message=message)

# Load the pre-trained roBERTa model for sentiment analysis
model = pipeline("sentiment-analysis", model="cardiffnlp/twitter-roberta-base-sentiment")

@app.route("/analyze", methods=["POST"])
def analyze_sentiment():
    # Get the text to be analyzed from the POST request
    data = request.get_json()
    text = data["text"]

    # Analyze the sentiment of the text using the pre-trained roBERTa model
    results = model(text)

    # Convert the sentiment analysis results to a JSON format and return as a response
    response = {"sentiment": results[0]["label"], "score": results[0]["score"]}
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
