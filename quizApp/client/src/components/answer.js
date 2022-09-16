import { useState } from "react";

const Answer = (props) => {
  const [currentClass, setCurrentClass] = useState("blue");
  const [testCorrect, setTestCorrect] = useState(null);

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    // props.onClick(props.e === props.question.correct_answer);

    setCurrentClass(
      props.e === props.question.correct_answer ? "green" : "red"
    );
    if (props.e === props.question.correct_answer) {
      setTestCorrect("YAY!");
      console.log(testCorrect);
      props.setScore((s) => s + 1);
    }
  };

  return (
    <div>
      <button type="button" className={currentClass} onClick={handleOnClick}>
        {decodeHtml(props.e)}
      </button>{" "}
      {testCorrect}
    </div>
  );
};

export default Answer;
//props
