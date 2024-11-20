import React from "react";
import '../css/GameScreen.css';
const GameScreen = ({ screenData, onNextScreen, isCorrect }) => {
  const handleGameEnd = (points, isCorrect) => {
    onNextScreen(points, isCorrect); // Passa els punts al component pare
  };
    return (
      
      <div className="game-screen">
        <h2>{screenData.title}</h2>
        <p>{screenData.description}</p>
        <div className="game">
          {React.cloneElement(screenData.screen, { onGameEnd: handleGameEnd, isCorrect: isCorrect })}

        </div>
      </div>
    )


};

export default GameScreen;
