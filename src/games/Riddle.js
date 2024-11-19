import React, { useState } from "react";
import '../css/Riddle.css';
const Riddle = ({ question, options, onGameEnd }) => {
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
  
    const handleOptionClick = (option) => {
      if (!isAnswered) {
        setIsAnswered(true); // Evita múltiples seleccions
        setIsCorrect(option.isCorrect);
  
        // Notifica al pare que el joc ha acabat i passa els punts
        if (onGameEnd) {
          const points = option.isCorrect ? 10 : 0;
          const correct = option.isCorrect ? true : false
          console.log('heeey')
          console.log(points, correct)
          onGameEnd(points, correct); 
        }
      }
    };
  
    return (
      <div>
        <p>{question}</p>
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                cursor: "pointer",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                margin: "5px 0",
              }}
            >
              {option.text}
            </li>
          ))}
        </ul>
        {isAnswered && (
          <p>{isCorrect ? "✅ Correcte!" : "❌ Incorrecte. Torna-ho a intentar."}</p>
        )}
      </div>
    );
  };
  
  export default Riddle;
