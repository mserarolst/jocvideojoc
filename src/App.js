import React, { useState } from "react";
import GameIntroduction from "./components/GameIntroduction";
import GameScreen from "./components/GameScreen";
import Score from "./components/Score";
import { screensData } from "./data/screensData";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState(-1); // -1 per a la introducció
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const total = 50;

  const handleNextScreen = (points, isCorrect) => {
    setScore(score + points); // Suma punts a la puntuació
    setCurrentScreen(currentScreen + 1); // Avança a la següent pantalla
    setIsCorrect(isCorrect); // Marca si la resposta era correcta (per a mostrar el score en la pantalla de punts)
  };

  return (
    <div className="App">
      {currentScreen === -1 ? (
        <GameIntroduction onStart={() => setCurrentScreen(0)} />
      ) : currentScreen < screensData.length ? (
        <>
          <Score score={score} isCorrect={isCorrect}/>
          <GameScreen
            screenData={screensData[currentScreen]}
            onNextScreen={handleNextScreen}
          />
        </>
      ) : (
        <div className="game-screen">
          <h1>Felicitats! Has completat el joc 🎉</h1>
          <p>Has completat el viatge pels videojocs i la seva evolució. Com has vist, la remediació i la transcodificació no només transformen els jocs, sinó també la manera en què ens relacionem amb el món digital.</p>
          <h3>Puntuació final: {score} de {total}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
