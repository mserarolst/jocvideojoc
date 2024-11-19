import React, { useState, useEffect } from "react";

const MiniGame = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
      setHighScore(Number(savedHighScore));
    }
  }, []);

  const handleButtonClick = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem("highScore", newScore);
    }
  };

  return (
    <div className="mini-game">
      <h2>Clicka el botó per guanyar punts!</h2>
      <button onClick={handleButtonClick}>+1 Punt</button>
      <p>Punts acumulats: {score}</p>
      <p>Millor puntuació: {highScore}</p>
    </div>
  );
};

export default MiniGame;
