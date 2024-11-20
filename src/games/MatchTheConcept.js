import React, { useState, useEffect } from "react";
import "../css/MatchTheConcept.css";

const MatchTheConcept = ({ pairs, onGameEnd }) => {
  const [shuffledPast, setShuffledPast] = useState([]);
  const [shuffledModern, setShuffledModern] = useState([]);
  const [selectedPast, setSelectedPast] = useState(null);
  const [selectedModern, setSelectedModern] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (matchedPairs.length === pairs.length) {
        if (onGameEnd) {
            const points = 10;
            const correct = true
            console.log(points, correct)
            onGameEnd(points, correct); 
        }
    }
  }, [matchedPairs])

  // Funció per desordenar un array
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...item }) => item);
  };

  useEffect(() => {
    // Desordena passat i modern quan es carrega el component
    setShuffledPast(shuffleArray(pairs.map((pair) => pair.past)));
    setShuffledModern(shuffleArray(pairs.map((pair) => pair.modern)));
  }, [pairs]);

  const handlePastClick = (pastItem) => {
    setSelectedPast(pastItem);
  };

  const handleModernClick = (modernItem) => {
    if (selectedPast) {
      // Comprova si la parella és correcta
      const isMatch = pairs.some(
        (pair) =>
          pair.past.image === selectedPast.image &&
          pair.modern.image === modernItem.image
      );

      if (isMatch) {
        setMatchedPairs([...matchedPairs, { past: selectedPast, modern: modernItem }]);
      }

      // Reinicia la selecció
      setSelectedPast(null);
      setSelectedModern(null);
    } else {
      setSelectedModern(modernItem);
    }
  };

  const isGameComplete = matchedPairs.length === pairs.length;

  return (
    <div className="match-the-concept">
      <div className="columns">
        <div className="column">
          <h3>Del passat</h3>
          <ul>
            {shuffledPast.map((pastItem, index) => (
              <li
                key={index}
                className={selectedPast === pastItem ? "selected" : ""}
                onClick={() => handlePastClick(pastItem)}
              >
                <img
                  src={pastItem.image}
                  alt={`Past ${index}`}
                  className={
                    matchedPairs.some((match) => match.past.image === pastItem.image)
                      ? "matched"
                      : ""
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>Modern</h3>
          <ul>
            {shuffledModern.map((modernItem, index) => (
              <li
                key={index}
                className={selectedModern === modernItem ? "selected" : ""}
                onClick={() => handleModernClick(modernItem)}
              >
                <img
                  src={modernItem.image}
                  alt={`Modern ${index}`}
                  className={
                    matchedPairs.some((match) => match.modern.image === modernItem.image)
                      ? "matched"
                      : ""
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isGameComplete && <p>✅ Felicitats! Has relacionat totes les imatges correctament!</p>}
    </div>
  );
};

export default MatchTheConcept;
