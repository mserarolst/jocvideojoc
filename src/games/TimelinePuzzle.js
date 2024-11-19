import React, { useState, useEffect } from "react";
import '../css/TimelinePuzzle.css';
const TimelinePuzzle = ({ events, onGameEnd }) => {
  const [userOrder, setUserOrder] = useState(events.map((e) => e.id));
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (onGameEnd && isCorrect !== null) {
      onGameEnd(isCorrect ? 10 : 0, isCorrect);
    }
  }, [isCorrect, onGameEnd]);

  // Gestiona la selecció d'un element
  const handleItemClick = (index) => {
    if (selectedIndex === null) {
      setSelectedIndex(index); // Selecciona el primer element
    } else {
      // Intercanvia els elements seleccionats
      const newOrder = [...userOrder];
      [newOrder[selectedIndex], newOrder[index]] = [newOrder[index], newOrder[selectedIndex]];
      setUserOrder(newOrder);
      setSelectedIndex(null); // Desselecciona després de l'intercanvi
    }
  };

  const handleCheck = () => {
    const isCorrectOrder = userOrder.every((id, index) => id === events[index].id);
    setIsCorrect(isCorrectOrder);
  };

  return (
    <div>
      <h3>Ordena de mes antic a més modern (de dalt a baix):</h3>
      <ul>
        {userOrder.map((id, index) => {
          const event = events.find((e) => e.id === id);
          return (
            <li
              key={id}
              onClick={() => handleItemClick(index)}
              className={`puzzle-item ${
                selectedIndex === index ? "selected" : ""
              }`}
            >
              {event.title}
            </li>
          );
        })}
      </ul>
      <button onClick={handleCheck}>Comprova la resposta</button>
      {isCorrect !== null && (
        <p>{isCorrect ? "✅ Correcte!" : "❌ Incorrecte, torna-ho a intentar."}</p>
      )}
    </div>
  );
};

export default TimelinePuzzle;
