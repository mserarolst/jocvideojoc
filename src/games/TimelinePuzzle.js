import React, { useEffect, useState } from "react";

const TimelinePuzzle = ({ events, onGameEnd }) => {
  const [userOrder, setUserOrder] = useState(events.map((e) => e.id));
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (onGameEnd && isCorrect) {
      onGameEnd(isCorrect ? 10 : 0, isCorrect ? true : false); // 10 punts per correcte, 0 per incorrecte
    }
  }, [isCorrect])

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (event, targetId) => {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain");

    const newOrder = [...userOrder];
    const draggedIndex = newOrder.indexOf(draggedId);
    const targetIndex = newOrder.indexOf(targetId);

    newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, draggedId);

    setUserOrder(newOrder);
  };

  const handleCheck = () => {
    const isCorrectOrder = userOrder.every((id, index) => id === events[index].id);
    setIsCorrect(isCorrectOrder);
  };

  return (
    <div>
      <h3>Ordena cronològicament els esdeveniments:</h3>
      <ul>
        {userOrder.map((id) => {
          const event = events.find((e) => e.id === id);
          return (
            <li
              key={id}
              draggable
              onDragStart={(e) => handleDragStart(e, id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, id)}
              className="draggable-item"
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
