import React from "react";
import "./quizzes.css";
import { useNavigate } from "react-router-dom";

const Quizzes = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      id: 1,
      title: "Advanced CSS Grid",
      xp: "+250 XP",
      pts: "+50 PTS",
      progress: 75,
      icon: "code_blocks",
      color: "green",
    },
    {
      id: 2,
      title: "JavaScript Promises",
      xp: "+300 XP",
      pts: "+75 PTS",
      progress: 25,
      icon: "javascript",
      color: "yellow",
    },
    {
      id: 3,
      title: "UI/UX Fundamentals",
      xp: "+150 XP",
      pts: "+30 PTS",
      progress: 0,
      icon: "brush",
      color: "green",
    },
    {
      id: 4,
      title: "Cybersecurity Basics",
      xp: "+400 XP",
      pts: "+100 PTS",
      progress: 100,
      icon: "security",
      color: "red",
    },
    {
      id: 5,
      title: "Python Data Structures",
      xp: "+350 XP",
      pts: "+80 PTS",
      progress: 0,
      icon: "data_object",
      color: "yellow",
    },
    {
      id: 6,
      title: "React State Management",
      xp: "+450 XP",
      pts: "+120 PTS",
      progress: 50,
      icon: "hub",
      color: "red",
    },
  ];

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
        {quizzes.map((q) => (
          <div
            key={q.id}
            className="quiz-card"
            onClick={() => navigate(`/quiz/${q.id}`)}
          >
            <div className={`quiz-bar bar-${q.color}`}></div>

            <div className="quiz-top">
              <span className="quiz-icon">{q.icon}</span>

              {/* PROGRESS RING */}
              <div className="progress-circle">
                <svg width="44" height="44">
                  <circle cx="22" cy="22" r="18" className="circle-bg" />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    className="circle-progress"
                    style={{
                      strokeDashoffset: `calc(113 - (113 * ${q.progress}) / 100)`,
                    }}
                  />
                </svg>
                <div className="progress-text">
                  {q.progress === 100 ? "✔" : `${q.progress}%`}
                </div>
              </div>
            </div>

            <p className="quiz-name">{q.title}</p>

            <div className="quiz-rewards">
              <span className="reward">{q.xp}</span>
              <span className="reward">{q.pts}</span>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
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
