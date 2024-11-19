import React, { useEffect } from "react";
import '../css/Score.css';
const Score = ({ score, isCorrect }) => {
  

  useEffect(() => {
    console.log(isCorrect);
  }, [isCorrect])
  return (
    <div className="score-board">
      {isCorrect != null ? (isCorrect ? <p>Has encertat la resposta! +10 punts </p> : <p>{"Resposta incorrecta :("}</p>) : <></>}
      <h3 style={{color: 'white'}}>Punts acumulats: {score}</h3>
    </div>
  );
};

export default Score;
