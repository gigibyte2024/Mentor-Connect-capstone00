import React, { useEffect, useState } from "react";
import "./quizzes.css";
import { useNavigate } from "react-router-dom";
import API from "./api/axiosInstance";

const Quizzes = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---------------- FETCH QUIZZES FROM BACKEND ----------------
  const fetchQuizzes = async () => {
    try {
      const res = await API.get("/quiz"); // GET /api/quiz (backend sends all quiz topics)
      setQuizzes(res.data);
    } catch (err) {
      console.error("Fetch Quiz Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="quizzes-page">
      {/* TOP NAV */}
      <header className="quizzes-header">
        <div className="header-left">
          <div className="brand-icon">⫸</div>
          <h2 className="brand-name">Commit Connect</h2>
        </div>

        <nav className="top-nav">
          <a className="nav-link">Dashboard</a>
          <a className="nav-link active">Quizzes</a>
          <a className="nav-link">Mentorship</a>
          <a className="nav-link">Leaderboard</a>
        </nav>

        <div className="header-right">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">⚙</button>
          <div
            className="header-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsE_XnEegyAAJ6rzgh-_mD5a1dvfmOOKhKM0I6seHz3mU8HLICfU9v8XtYFLUdmfP-raTMFtRWOxoFXuK5jVwCCMFbQ5Vi1xiCtVZLUXWlO22inebKpmtotYka6GUoTT6qdoNp4Aet1uo_Fs04m4X7jwVybHM5-1tFeoaA0UDO3U0dHY30bjZgwC9gZNdySHvn_pVSuK1R__3KSzWWO7vKFsA49srQBms3yE7UnO0AbKIfMxVNkZD86IIosb-bz_4kpNbx5-93dYg')",
            }}
          />
        </div>
      </header>

      {/* TITLE */}
      <section className="quiz-title-section">
        <h1 className="quiz-title">Available Quizzes</h1>
        <p className="quiz-subtitle">
          Select a quiz to test your knowledge and earn rewards.
        </p>
      </section>

      {/* SEARCH + FILTERS */}
      <div className="quiz-search-filter">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input placeholder="Search for a quiz..." />
        </div>

        <div className="filter-buttons">
          <button className="filter-btn primary">Topic ⌄</button>
          <button className="filter-btn">Difficulty ⌄</button>
          <button className="filter-btn">Status ⌄</button>
        </div>
      </div>

      {/* QUIZ GRID */}
      <div className="quiz-grid">
        {loading && <p style={{ color: "#fff" }}>Loading quizzes...</p>}

        {!loading &&
          quizzes.map((q) => (
            <div
              key={q.id}
              className="quiz-card"
              onClick={() => navigate(`/quiz/${q.id}`)}
            >
              <div className={`quiz-bar bar-green`}></div>

              <div className="quiz-top">
                {/* ICON */}
                <span className="quiz-icon material-symbols-outlined">
                  menu_book
                </span>

                {/* PROGRESS RING ALWAYS 0 FOR NOW */}
                <div className="progress-circle">
                  <svg width="44" height="44">
                    <circle cx="22" cy="22" r="18" className="circle-bg" />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      className="circle-progress"
                      style={{ strokeDashoffset: `113` }}
                    />
                  </svg>
                  <div className="progress-text">0%</div>
                </div>
              </div>

              <p className="quiz-name">{q.topic}</p>

              <div className="quiz-rewards">
                <span className="reward">+100 XP</span>
                <span className="reward">+20 PTS</span>
              </div>
            </div>
          ))}
      </div>

      {/* PAGINATION (dummy for now) */}
      <div className="pagination">
        <button className="page-arrow">‹</button>
        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <span className="page-dots">...</span>
        <button className="page-number">10</button>
        <button className="page-arrow">›</button>
      </div>
    </div>
  );
};

export default Quizzes;
