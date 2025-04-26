import { useNavigate } from "react-router-dom";

function Game({
  question,
  nextStep,
  setCorrectAnswerNum,
  step,
  questions,
  setStep,
  children,
}) {
  const navigate = useNavigate();
  if (!question) {
    return (
      <div className="game">
        <h1>Quiz completed!</h1>
        <button
          onClick={() => {
            navigate("/result");
          }}
        >
          Go to results
        </button>
      </div>
    );
  }

  const isCorrect = (index) => {
    if (index === question.correct) {
      console.log("correct");
      setCorrectAnswerNum((prev) => prev + 1);
    } else {
      console.log("uncorrect");
    }
  };

  const progress = Math.round((step / questions.length) * 100);

  return (
    <>
      {children}
      <div className="progress">
        <div
          style={{ width: `${progress}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li
            key={index}
            onClick={() => {
              console.log({ index });
              isCorrect(index);
              nextStep();
            }}
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
