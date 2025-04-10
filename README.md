# Webdevelopment_Module8_Module7_Assignment13
**IELTS Speaking Test - AI Question Generator**
This project allows users to dynamically generate IELTS Speaking Test questions using Gemini AI. It consists of two parts: a React frontend and a Flask backend.

_Project Structure_
backend/: Flask app with Gemini AI integration

frontend/: React app for user interaction

Setup Instructions
Backend
Set up a Python virtual environment

Install dependencies listed in requirements.txt

Create a .env file with your Gemini API key

Run the Flask app to start the backend server

Frontend
Navigate to the frontend directory

Install frontend dependencies using npm

Start the development server to launch the React app

Features
Generate IELTS Speaking questions in real time

Choose question type and difficulty level

Clean display of generated questions

API Endpoint
The backend includes a POST endpoint /api/ai-questions that accepts question type and difficulty, returning three AI-generated questions formatted in a numbered list.

Example Inputs
Question Type: Personal, Social, Work, Study

Difficulty: Easy, Medium, Hard

