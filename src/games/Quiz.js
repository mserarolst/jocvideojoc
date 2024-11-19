import React, { useState } from "react";

const Quiz = ({ questions, onGameEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
     
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else if (onGameEnd) {
        const points = isCorrect ? 10 : 0;
        const correct = isCorrect ? true : false
        console.log('heeey')
        console.log(points, correct)
        onGameEnd(points, correct); 
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score">
          Has encertat {score} de {questions.length} preguntes!
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].questionText}</h2>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li
                key={index}
                className="quiz-answer"
                onClick={() => handleAnswerClick(answer.isCorrect)}
              >
                {answer.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
