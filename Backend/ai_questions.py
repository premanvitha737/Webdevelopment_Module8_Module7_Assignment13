import google.generativeai as genai
from config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

# Using the supported Gemini 2.0 Flash model
model = genai.GenerativeModel("gemini-2.0-flash")

def generate_questions(question_type: str, difficulty: str):
    prompt = f"""
    Imagine yourself as an IELTS Examiner and generate exactly 3 typical questions.
    Type: {question_type}
    Difficulty: {difficulty}
    Format them as a numbered list, each on a new line.
    """

    try:
        response = model.generate_content(prompt)
        raw_output = response.text.strip()
        
        # Split the response into clean individual questions
        questions = [line.strip() for line in raw_output.split('\n') if line.strip()]
        
        return questions
    except Exception as e:
        return {"error": str(e)}
