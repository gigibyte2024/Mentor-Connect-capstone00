import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./quiz-page.css";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // QUIZ STATE
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90); // 1 min 30 sec timer
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // ---------------- TEMP HARD-CODED QUIZ DATA ----------------
  const quizData = {
    1: {
      title: "Advanced CSS Grid",
      questions: [
        {
          question: "Which CSS unit is NOT relative?",
          options: ["vw", "vh", "px", "rem"],
          answer: 2,
        },
        {
          question: "What does grid-auto-rows control?",
          options: [
            "Row height for implicit rows",
            "Column width",
            "Grid template areas",
            "Gap between tracks",
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: "JavaScript Promises",
      questions: [
        {
          question: "What does a resolved Promise return?",
          options: ["reject()", "resolve()", "value", "error"],
          answer: 2,
        },
        {
          question: "Which method handles errors?",
          options: [".then()", ".catch()", ".finally()", "await"],
          answer: 1,
        },
      ],
    },
  };

  const quiz = quizData[id] || {
    title: "Quiz",
    questions: [],
  };

  // ---------------- TIMER LOGIC ----------------
  useEffect(() => {
    if (!quizStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("⏳ Time's up!");
          navigate("/quizzes");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted]);

  // Format MM:SS
  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const startQuiz = () => setQuizStarted(true);

  const q = quiz.questions[currentQuestion];

  return (
    <div className="quizpage-wrapper">
      {/* -------------------------------------------------------
           INSTRUCTIONS PAGE (before quiz starts)
      ------------------------------------------------------- */}
      {!quizStarted ? (
        <div className="instructions-wrapper">
          <div className="instructions-box">
            <h1 className="instructions-title">{quiz.title}</h1>

            <ul className="instructions-list">
              <li>⫸ You will have 1 minute 30 seconds to complete the quiz.</li>
              <li>⫸ Each question has one correct option.</li>
              <li>⫸ You cannot pause once the quiz begins.</li>
              <li>⫸ Your score affects XP + leaderboard ranking!</li>
            </ul>

            <button className="start-btn" onClick={startQuiz}>
              Start Quiz
            </button>

            <button className="exit-btn" onClick={() => navigate("/quizzes")}>
              Exit
            </button>
          </div>
        </div>
      ) : (
        /* -------------------------------------------------------
           QUIZ QUESTIONS PAGE
        ------------------------------------------------------- */
        <div className="quiz-box">
          <header className="quiz-header">
            <h2 className="quiz-title">{quiz.title}</h2>
            <div className="quiz-timer">⏳ {formatTime(timeLeft)}</div>
          </header>

          {q && (
            <div className="question-box">
              <h3 className="question-text">{q.question}</h3>

              <div className="options-list">
                {q.options.map((op, idx) => (
                  <label key={idx} className="option-item">
                    <input type="radio" name={`q-${currentQuestion}`} />
                    <span>{op}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <footer className="quiz-footer">
            <button
              className="next-btn"
              onClick={() => {
                if (currentQuestion + 1 < quiz.questions.length) {
                  setCurrentQuestion(currentQuestion + 1);
                } else {
                  alert("🎉 Quiz Completed!");
                  navigate("/quizzes");
                }
              }}
            >
              Next →
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
