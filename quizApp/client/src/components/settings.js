import React, { useEffect, useState } from 'react';
// import "../styles.css";


const Settings = (props) => {
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(null);
    const [questionCategory, setQuestionCategory] = useState("");
    const [questionDifficulty, setQuestionDifficulty] = useState("");
    const [questionType, setQuestionType] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);

    const loadData = () => {
        fetch('http://localhost:8080/api/categories')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setOptions(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [setOptions])



  const handleCategoryChange = event => {
    setQuestionCategory(event.target.value)
  }
  const handleDifficultyChange = event => {
    setQuestionDifficulty(event.target.value)
  }
  const handleTypeChange = event => {
    setQuestionType(event.target.value)
  }
	const handleAmountChange = event => {
    setNumberOfQuestions(event.target.value)
  }


  if (!loading) {
     return (
      <div>
        <div>
          <h2>Select Category:</h2>
          <select value={questionCategory} onChange={handleCategoryChange}>
            <option>All</option>
            {options &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h2>Select Difficulty:</h2>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="">All</option>
            <option value="easy" key="">Easy</option>
            <option value="medium" key="">Medium</option>
            <option value="hard" key="">Hard</option>
          </select>
        </div>
        <div>
          <h2>Select Question Type:</h2>
          <select value={questionType} onChange={handleTypeChange}>
            <option value="" key="type-0">All</option>
            <option value="multiple" key="type-1">Multiple Choice</option>
            <option value="boolean" key="type-2">True/False</option>
          </select>
        </div>
				<div>
          <h2>Amount of Questions:</h2>
          <input value={numberOfQuestions} onChange={handleAmountChange} />
        </div>
      </div>
    );
  }
  return (
    <p>
     {setLoading}
    </p>
  );
}
export default Settings;
