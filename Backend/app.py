# app.py
from flask import Flask, request, jsonify
from ai_questions import generate_questions

from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/api/ai-questions', methods=['POST'])
def ai_questions():
    try:
        data = request.json
        question_type = data.get('question_type')
        difficulty = data.get('difficulty')

        if not question_type or not difficulty:
            return jsonify({"error": "Missing question_type or difficulty"}), 400

        result = generate_questions(question_type, difficulty)

        if isinstance(result, dict) and "error" in result:
            return jsonify(result), 500
        
        return jsonify({"questions": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
