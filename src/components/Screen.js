import React from "react";
import '../css/GameIntroduction.css'
const Screen = ({ title, content, onGameEnd }) => {

    const onNext = () => {
        onGameEnd(0, null)
    }

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onNext} className="start-button">
        Començar el Joc
      </button>
    </div>
  );
};

export default Screen;
