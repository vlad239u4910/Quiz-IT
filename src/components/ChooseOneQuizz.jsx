import React from "react";
import { useNavigate } from "react-router-dom";

function ChooseOneQuizz({ setLoading, setQuestions, quizFiles }) {
  const navigate = useNavigate();

  const importQuestions = (file) => {
    setLoading(true);
    import(`../quizzes/${file}`)
      .then((module) => {
        setQuestions(module.default);
        setLoading(false);
        navigate("/game");
      })
      .catch((err) => {
        console.error("Ошибка загрузки квиза:", err);
        setLoading(false);
      });
  };

  return (
    <div className="oneQuizz">
      <h2>Choose the quizz</h2>
      {quizFiles.map((file, index) => (
        <button key={index} onClick={() => importQuestions(file)}>
          {file.replace(".json", "").toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default ChooseOneQuizz;
