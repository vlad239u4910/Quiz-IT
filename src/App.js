import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import React from "react";
import Result from "./components/Result";
import Game from "./components/Game";
import ChooseOneQuizz from "./components/ChooseOneQuizz";
import Menu from "./components/Menu";
import Menubtn from "./components/Btn-return-menu";

function App() {
  const [step, setStep] = React.useState(0);
  const [correctAnswerNum, setCorrectAnswerNum] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // Для отслеживания загрузки вопросов
  const [shouldReload, setShouldReload] = React.useState(false);

  // Массив с файлами квизов
  const quizFiles = [
    "react.json",
    "html.json",
    "css.json",
    "js.json",
    "ts.json",
    "git.json",
    "browser.json",
    "security.json",
    "perf.json",
    "algorithms.json",
  ];

  React.useEffect(() => {
    const randomFile = quizFiles[Math.floor(Math.random() * quizFiles.length)];
    setLoading(true);
    import(`./quizzes/${randomFile}`)
      .then((module) => {
        setQuestions(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки квиза:", err);
        setLoading(false);
      });
  }, [shouldReload]);

  // Логика следующего шага
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Если вопросы загружаются, можно показать "Загрузка..."
  if (loading) {
    return <div>Loading...</div>;
  }

  const question = questions[step];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Menu setShouldReload={setShouldReload} />}
          ></Route>

          <Route
            path="/game"
            element={
              <Game
                question={question}
                nextStep={nextStep}
                setCorrectAnswerNum={setCorrectAnswerNum}
                step={step}
                questions={questions}
                setStep={setStep}
              >
                {" "}
                <Menubtn
                  setCorrectAnswerNum={setCorrectAnswerNum}
                  setStep={setStep}
                />
              </Game>
            }
          ></Route>

          <Route
            path="/choose-quiz"
            element={
              <ChooseOneQuizz
                setLoading={setLoading}
                questions={questions}
                setQuestions={setQuestions}
                quizFiles={quizFiles}
              />
            }
          ></Route>

          <Route
            path="/result"
            element={
              <Result
                correctAnswerNum={correctAnswerNum}
                setStep={setStep}
                setCorrectAnswerNum={setCorrectAnswerNum}
                step={step}
                questions={questions}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
