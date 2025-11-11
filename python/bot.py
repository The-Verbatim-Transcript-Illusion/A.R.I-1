from flask import Flask, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = "YOUR_OPENAI_API_KEY"

@app.route("/chat", methods=["POST"])
def chat():
    user_msg = request.json.get("message")
    response = openai.ChatCompletion.create(
        model="gpt-5-mini",
        messages=[{"role": "user", "content": user_msg}]
    )
    return jsonify({"response": response.choices[0].message["content"]})

if __name__ == "__main__":
    app.run(debug=True)
