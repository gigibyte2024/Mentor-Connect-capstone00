import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./quiz-page.css";
import API from "./api/axiosInstance";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  // ---------------- FETCH QUIZ QUESTIONS ----------------
  const fetchQuiz = async () => {
    try {
      const res = await API.get(`/quiz/${id}`);
      setQuizData(res.data);
    } catch (err) {
      console.error("Quiz Fetch Error:", err);
      alert("Quiz not found");
      navigate("/quizzes");
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  // ---------------- TIMER ----------------
  useEffect(() => {
    if (!quizStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitScore();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted]);

  const submitScore = async () => {
    try {
      await API.post("/quiz/submit", {
        topic: quizData.topic,
        score,
      });

      alert("🎉 Quiz Submitted!");
      navigate("/quizzes");
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Failed to submit quiz");
    }
  };

  const startQuiz = () => setQuizStarted(true);

  if (!quizData)
    return <div style={{ color: "white", padding: 50 }}>Loading quiz...</div>;

  const question = quizData.questions[currentQuestion];

  return (
    <div className="quizpage-wrapper">
      {!quizStarted ? (
        <div className="instructions-wrapper">
          <div className="instructions-box">
            <h1 className="instructions-title">{quizData.topic}</h1>

            <ul className="instructions-list">
              <li>⫸ You will have 1 minute 30 seconds to complete the quiz.</li>
              <li>⫸ Each question has one correct option.</li>
              <li>⫸ You cannot pause once the quiz begins.</li>
              <li>⫸ Your score affects XP & leaderboard ranking!</li>
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
        <div className="quiz-box">
          <header className="quiz-header">
            <h2 className="quiz-title">{quizData.topic}</h2>
            <div className="quiz-timer">⏳ {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}{timeLeft % 60}</div>
          </header>

          <div className="question-box">
            <h3 className="question-text">{question.question}</h3>

            <div className="options-list">
              {question.options.map((op, idx) => (
                <label key={idx} className="option-item">
                  <input
                    type="radio"
                    name={`q-${currentQuestion}`}
                    onChange={() => setSelected(idx)}
                  />
                  <span>{op}</span>
                </label>
              ))}
            </div>
          </div>

          <footer className="quiz-footer">
            <button
              className="next-btn"
              onClick={() => {
                // check score
                if (selected === question.answer)
                  setScore((prev) => prev + 1);

                setSelected(null);

                if (currentQuestion + 1 < quizData.questions.length) {
                  setCurrentQuestion(currentQuestion + 1);
                } else {
                  submitScore();
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
