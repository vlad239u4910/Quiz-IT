import { useNavigate } from "react-router-dom";

function Menubtn({ setCorrectAnswerNum, setStep }) {
  const navigate = useNavigate();
  return (
    <div className="return-menu-btn">
      <button
        onClick={() => {
          setCorrectAnswerNum(0);
          setStep(0);
          navigate("/");
        }}
      >
        Menu
      </button>
    </div>
  );
}

export default Menubtn;
