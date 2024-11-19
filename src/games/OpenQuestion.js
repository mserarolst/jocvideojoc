import React, { useState, useEffect } from "react";
import '../css/OpenQuestion.css';
const OpenQuestion = ({ question, placeholder, questionId }) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Recupera la resposta des de localStorage
    const savedResponse = localStorage.getItem(questionId);
    if (savedResponse) {
      setResponse(savedResponse);
    }
  }, [questionId]);

  const handleChange = (e) => {
    const newResponse = e.target.value;
    setResponse(newResponse);
    // Guarda la resposta en localStorage
    localStorage.setItem(questionId, newResponse);
  };

  return (
    <div>
      <p>{question}</p>
      <textarea
        rows="4"
        cols="30"
        placeholder={placeholder}
        value={response}
        onChange={handleChange}
      ></textarea>
      {response && <p><strong>Resposta guardada:</strong> {response}</p>}
    </div>
  );
};

export default OpenQuestion;
