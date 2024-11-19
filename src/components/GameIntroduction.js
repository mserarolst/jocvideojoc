import React from "react";
import '../css/GameIntroduction.css'
const GameIntroduction = ({ onStart }) => {
  return (
    <div className="game-introduction">
      <h1>Benvingut al Joc de Remediació!</h1>
      <p>
        Explora el fascinant món dels videojocs mentre aprens sobre la seva evolució
        i transformació en la cultura digital. Cada pantalla inclou una petita
        explicació i un repte divertit. Guanya punts pel teu rendiment i competeix
        amb tu mateix!
      </p>
      <h2>Com funciona:</h2>
      <ul>
        <li>Llegeix la introducció de cada pantalla per entendre el context.</li>
        <li>Juga a diferents jocs interactius com quizzes, endevinalles o trencaclosques.</li>
        <li>Acumula punts per cada repte superat correctament.</li>
        <li>Intenta obtenir la puntuació més alta!</li>
      </ul>
      <button onClick={onStart} className="start-button">
        Començar el Joc
      </button>
    </div>
  );
};

export default GameIntroduction;
