import { useState, useEffect } from "react";
import Answer from "./answer.js";

const QuestionCard = (props) => {
  const [answers, setAnswers] = useState([]);
  const handleAnswerOnClick = (isCorrect_answer) => {
    props.onClick(
      isCorrect_answer
    ); /* Function is being called with isCorrect_answer value */
  };

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  //PseudoCode
  //come up with set of answers that include of correct and incorrect answers
  //generate four answers
  //render four buttons corresponding to the four answers
  useEffect(
    () =>
      setAnswers(
        [
          ...props.question.incorrect_answers,
          props.question.correct_answer,
        ].sort(() => Math.random() - 0.5)
      ),
    [props.question.correct_answer]
  );
  // const answers = [
  //   ...props.question.incorrect_answers,
  //   props.question.correct_answer,
  // ];

  //array destructuring for getting incorrect answers
  // const randNum = Math.floor(Math.random() * 3);
  // answers.splice(randNum, 0, props.question.correct_answer); //getting the correct answer

  // console.log(answers);
  return (
    <div className={"question-section"}>
      <div className="question-text">{decodeHtml(props.question.question)}</div>
      <div className="answer-section">
        {answers.map((e, index) => {
          console.log(e);
          return (
            <Answer
              key={index}
              e={e}
              question={props.question}
              onClick={handleAnswerOnClick}
              setScore={props.setScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
