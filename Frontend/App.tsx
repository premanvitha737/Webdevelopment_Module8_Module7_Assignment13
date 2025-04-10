import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [questionType, setQuestionType] = useState('Personal');
  const [difficulty, setDifficulty] = useState('Easy');
  const [questions, setQuestions] = useState('');
  const [error, setError] = useState('');

  const generateQuestions = async () => {
    setError('');
    setQuestions('');

    try {
      const response = await axios.post('http://localhost:5000/api/ai-questions', {
        question_type: questionType,
        difficulty: difficulty,
      });

      if (response.data.questions) {
        setQuestions(response.data.questions);
      } else {
        setError('No questions returned from API.');
      }
    } catch (err: any) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>IELTS Speaking Test - AI Question Generator</h1>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Question Type:&nbsp;
          <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Difficulty:&nbsp;
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>
      </div>
      <button onClick={generateQuestions}>Generate Questions</button>
      <div style={{ marginTop: '2rem' }}>
        {questions && (
          <div>
            <h3>Generated Questions:</h3>
            <pre>{questions}</pre>
          </div>
        )}
        {error && (
          <div style={{ color: 'red', marginTop: '1rem' }}>
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
