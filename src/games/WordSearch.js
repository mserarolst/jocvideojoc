import React, { useState } from "react";
import "../css/WordSearch.css";

const grid = [
  ["S", "U", "P", "E", "R", "M", "A", "R", "I", "O"],
  ["A", "P", "O", "K", "E", "M", "O", "N", "Z", "A"],
  ["T", "E", "T", "R", "I", "S", "M", "P", "Q", "L"],
  ["R", "E", "M", "E", "D", "I", "A", "C", "I", "O"],
  ["A", "O", "L", "M", "I", "N", "E", "C", "R", "A"],
  ["N", "B", "C", "D", "F", "I", "Z", "E", "L", "D"],
  ["X", "U", "L", "D", "F", "E", "W", "K", "P", "E"],
  ["G", "R", "F", "H", "B", "L", "O", "O", "V", "R"],
  ["Z", "E", "L", "D", "A", "B", "Z", "P", "Ñ", "E"],
];

const words = ["SUPER", "MARIO", "POKEMON", "TETRIS", "REMEDIACIO", "ZELDA"];

const WordSearch = ({ onGameEnd }) => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [message, setMessage] = useState("");

  const handleCellClick = (rowIndex, colIndex) => {
    // Comprova si la cel·la ja ha estat seleccionada
    if (
      selectedCells.some(
        (cell) => cell.row === rowIndex && cell.col === colIndex
      )
    ) {
      return; // Evita seleccions duplicades
    }

    // Afegim la cel·la seleccionada a la llista
    const selected = {
      row: rowIndex,
      col: colIndex,
      letter: grid[rowIndex][colIndex],
    };
    setSelectedCells([...selectedCells, selected]);
  };

  const isContiguous = (cells) => {
    if (cells.length < 2) return true; // Una sola cel·la és vàlida
  
    const diffs = cells.map((_, i, arr) => {
      if (i === 0) return null; // No hi ha diferència per la primera cel·la
      return {
        rowDiff: cells[i].row - cells[i - 1].row,
        colDiff: cells[i].col - cells[i - 1].col,
      };
    }).slice(1); // Eliminem el primer element (null)
  
    // Comprova si totes les diferències són iguals (alineació contínua)
    return diffs.every(
      (diff, _, arr) =>
        diff.rowDiff === arr[0].rowDiff && diff.colDiff === arr[0].colDiff
    );
  };
  

  const checkWord = () => {
    if (!isContiguous(selectedCells)) {
      setMessage("❌ Les lletres seleccionades no són contigües.");
      setSelectedCells([]); // Reinicia la selecció
      return;
    }
  
    const selectedWord = selectedCells
      .map((cell) => cell.letter)
      .join("")
      .toUpperCase();
  
    if (words.includes(selectedWord) && !foundWords.includes(selectedWord)) {
      setFoundWords([...foundWords, selectedWord]);
      setMessage(`✅ Has trobat la paraula: ${selectedWord}!`);
      setSelectedCells([]);
  
      // Comprova si totes les paraules han estat trobades
      if (foundWords.length + 1 === words.length) {
        onGameEnd(10, true); // Joc completat amb èxit
      }
    } else {
      setMessage("❌ Aquesta no és una paraula vàlida.");
      setSelectedCells([]); // Reinicia la selecció
    }
  };
  

  return (
    <div className="word-search">
      <h3>Sopa de Lletres: Troba les paraules!</h3>
      <div className="container">
        <div>
            <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                {row.map((letter, colIndex) => (
                    <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`cell ${
                        selectedCells.some(
                        (cell) =>
                            cell.row === rowIndex && cell.col === colIndex
                        )
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                    {letter}
                    </div>
                ))}
                </div>
            ))}
            </div>
            <button className="check-button" onClick={checkWord}>
                Comprova la Paraula
            </button>
            {message && <p className="message">{message}</p>}
        </div>
        <div className="words">
          <h4>Paraules a trobar:</h4>
          <ul>
            {words.map((word, index) => (
              <li
                key={index}
                className={`word ${foundWords.includes(word) ? "found" : ""}`}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordSearch;
