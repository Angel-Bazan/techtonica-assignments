import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleScoreOnClick = (isCorrect_answer) => {
    
    if(isCorrect_answer){
        setScore(score + 1)
    }
    
  }

  const loadData = () => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is line 11", data.results);
        setQuestions(data.results);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="Container p-3 mb-2 bg-info text-white">
      <div className="question-count">
        <span>Questions </span>{score}/{questions.length}
      </div>
      {questions.map((question, index) => {
        return <QuestionCard key={index} question={question} onClick={handleScoreOnClick} />;
      })}
    </div>
  );
};

export default Game;
