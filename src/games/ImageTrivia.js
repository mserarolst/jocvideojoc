import React, { useState } from "react";
import "../css/ImageTrivia.css";

const ImageTrivia = ({ question, options, onGameEnd }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOnMouseEnter = (option) => {
    setSelectedOption(option); // Marca l'opció seleccionada per mostrar el tooltip
  }
  const handleOptionClick = (option) => {
    setIsCorrect(option.isCorrect); // Comprovem si és correcta
    if (onGameEnd) {
      const points = option.isCorrect ? 10 : 0;
      const correct = option.isCorrect ? true : false
      console.log('heeey')
      console.log(points, correct)
      onGameEnd(points, correct); 
    }
  };

  return (
    <div className="image-trivia">
      <p>{question}</p>
      <div className="imagetrivia"  style={{ display: window.innerWidth < 900 ? 'block' : 'flex', justifyContent: 'space-around', cursor: 'pointer' }}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            onMouseEnter={() => handleOnMouseEnter(index)}
          >
            <img src={option.image} alt={option.text} style={{width: '250px', border: selectedOption == index ? '2px solid red' : 'none'}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTrivia;
