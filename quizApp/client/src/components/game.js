
// import { useState, useEffect } from "react";
// import QuestionCard from "./questioncard";

// const Game = (props) => {

//     const [questions, setQuestions] = useState([]);
//     const [correctAnswer, setCorrectAnswer] = useState(false);
//     const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);

//     const loadData = () => {
//         fetch('http://localhost:8080/api/questions')
//             .then((response) => response.json())
//             .then(data => {
//                 console.log("This is line 11", data.results);
//                 setQuestions(data.results);
//             })
//     }

//     useEffect(() => {
//         loadData();
//     }, [])

//     return (
//         <div className="Container">
//             <div className='question-count'>
//                 <span>Question 1</span>/{questions.length}
//             </div>
//             {questions.map((question, index) => {
//                 return <QuestionCard key={index} question={question} />
//             })}
//         </div>
//     )

// }

export default Game;