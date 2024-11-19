import React, { useState, useEffect } from "react";
import "../css/TimelinePuzzle.css";

const TimelinePuzzle = ({ events, onGameEnd }) => {
  // Funció per barrejar l'ordre dels esdeveniments
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...item }) => item);
  };

  // Estat per guardar l'ordre actual de l'usuari
  const [userOrder, setUserOrder] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    // Desordena els esdeveniments al carregar el component
    const shuffledEvents = shuffleArray(events);
    setUserOrder(shuffledEvents.map((e) => e.id)); // Inicialitza l'ordre aleatori
  }, [events]);

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
      <h3>Ordena de més antic a més modern (de dalt a baix):</h3>
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
