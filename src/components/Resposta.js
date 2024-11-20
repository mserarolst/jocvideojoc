import React from "react";
import '../css/GameIntroduction.css'
const Resposta = ({ title, content, image, video, isCorrect, onGameEnd }) => {

    const onNext = () => {
        onGameEnd(0, null)
    }

  return (
    <div>
      {isCorrect ? <h1>Correcte!</h1> : <h1>Error!</h1>}
      <p>{content}</p>
      {image ? <img style={{height: '200px'}} src={image} /> : <></>}
      {video ? video : <></>}
      <div style={{marginTop: '10px'}}>
        <button onClick={onNext} className="start-button">
            Següent
        </button>
      </div>
    </div>
  );
};

export default Resposta;
