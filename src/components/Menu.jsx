import { useNavigate } from "react-router-dom";

function Menu({ setShouldReload }) {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <h2>IT quiz game</h2>
      <button
        onClick={() => {
          setShouldReload((prev) => !prev);
          navigate("/game");
        }}
      >
        Start a random quiz
      </button>

      <button
        onClick={() => {
          navigate("/choose-quiz");
        }}
      >
        Choose the quiz
      </button>
    </div>
  );
}

export default Menu;
