import { useNavigate } from "react-router-dom";

function Result({ correctAnswerNum, setCorrectAnswerNum, setStep, questions }) {
  const navigate = useNavigate();
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="resultImg"
      />
      <h2>
        You guessed {correctAnswerNum}/{questions.length} questions correctly
      </h2>

      <button
        onClick={() => {
          setCorrectAnswerNum(0);
          setStep(0);
          navigate("/");
        }}
      >
        Try again
      </button>
    </div>
  );
}

export default Result;
