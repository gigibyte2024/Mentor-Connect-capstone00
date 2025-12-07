import React, { useEffect, useState } from "react";
import "./student-dashboard.css";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance"; 
import { getMyProfile } from "../api/user"; 
import { getMentors } from "../api/mentor";  

const StudentDashboard = () => {
  const navigate = useNavigate();

  // ---------- STATE ----------
  const [user, setUser] = useState(null);
  const [mentors, setMentors] = useState([]);

  // ---------- FETCH PROFILE ----------
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await getMyProfile();
        setUser(res.data.user);
      } catch (err) {
        console.log("Profile fetch error:", err);
      }
    }
    fetchProfile();
  }, []);

  // ---------- FETCH MENTORS ----------
  useEffect(() => {
    async function fetchMentors() {
      try {
        const res = await getMentors();
        setMentors(res.data.mentors);
      } catch (err) {
        console.log("Mentor fetch error:", err);
      }
    }
    fetchMentors();
  }, []);

  return (
    <div className="student-wrapper">

      {/* ================= SIDEBAR ================= */}
      <aside className="student-sidebar">

        <div className="sidebar-logo">
          <div className="logo-icon"></div>
          <h2 className="logo-text">Commit Connect</h2>
        </div>

        <div className="sidebar-menu">
          <p className="menu-item active">📊 Dashboard</p>

          <p className="menu-item" onClick={() => navigate("/student-mentors")}>
            👤 Discover Mentors
          </p>

          <p className="menu-item" onClick={() => navigate("/quizzes")}>
            🧠 Quizzes
          </p>

          <p className="menu-item" onClick={() => navigate("/chat")}>
            💬 Chat
          </p>

          <p className="menu-item" onClick={() => navigate("/profile")}>
            ⚙ Profile
          </p>
        </div>

        {/* BOTTOM STUDENT INFO */}
        <div className="sidebar-bottom">
          <div className="student-info">
            <div
              className="student-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPVREcofcdabBOCM-BWpyy4ilg4VPetfkrL6EIrwGicIecZ_kS8IIF06iI7oiWOvIZcop6QS7Bc4CRR0iNB4Et61sPxi54688Iq-4aWF1vRla1wwdh6_xwl8Lzry1qi4QVptq5XXMHKWcyIAaHJ6WDFKNfihYLG6Lu9XsU6Ja90ESJaWVk6ZdgEk7DLDdpsl2AOZDLRPLujkuA61jiwib7L9M9CJXrRL-w6qCw7-svQCpPeyjQwkr6wXGYZZvLS_m5ebHCaLvhqYI')",
              }}
            ></div>

            <div>
              <p className="student-name">{user?.name || "Loading..."}</p>
              <p className="student-role">{user?.role || "Student"}</p>
            </div>
          </div>
        </div>

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="student-main">

        {/* TOP BAR */}
        <header className="topbar">
          <h1 className="top-title">
            Welcome Back, {user?.name?.split(" ")[0] || "Student"}!
          </h1>

          <div className="top-stats">
            <div className="stats-box">
              <p>Points:</p>
              <strong className="cyan-text">{user?.points || 0}</strong>
            </div>

            <div className="stats-box">
              <p>Level:</p>
              <strong className="cyan-text">{user?.level || 1}</strong>
            </div>

            <button className="notif-btn">🔔</button>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="main-grid">

          {/* ================= LEFT COLUMN ================= */}
          <div className="left-column">

            {/* Continue Your Quest */}
            <div className="section-box">
              <div className="section-header">
                <h3>Continue Your Quest</h3>
                <button className="continue-btn">Continue Learning</button>
              </div>

              <h4>Neural Network Fundamentals</h4>
              <p className="small-muted">Module 3: Backpropagation</p>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }} />
              </div>
            </div>

            {/* Discover Mentors */}
            <div className="section-title">Discover Mentors</div>

            <div className="mentor-grid">
              {mentors.length > 0 ? (
                mentors.slice(0, 3).map((mentor) => (
                  <div className="mentor-card" key={mentor.id}>
                    <div
                      className="mentor-img"
                      style={{
                        backgroundImage:
                          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcUOj8oN48c9U0v8tYbslhvcP5wVYk_98Aw&usqp=CAU')",
                      }}
                    />
                    <p className="mentor-name">{mentor.user?.name}</p>
                    <p className="mentor-skill">{mentor.skills}</p>
                    <button className="connect-btn">Connect</button>
                  </div>
                ))
              ) : (
                <p>No mentors found.</p>
              )}
            </div>

            {/* Active Quizzes */}
            <div className="section-title">Active Quizzes</div>

            <div className="quiz-grid">
              {/* KEEPING YOUR ORIGINAL UI — unchanged */}
              <div className="quiz-card">
                <p className="quiz-status pink">In Progress</p>
                <h4>Cryptography Basics</h4>
                <p className="small-muted">Security Module</p>

                <div className="progress-bar small">
                  <div className="progress-fill pink" style={{ width: "75%" }} />
                </div>
              </div>

              <div className="quiz-card">
                <p className="quiz-status">Not Started</p>
                <h4>Data Structures Challenge</h4>
                <p className="small-muted">Core Curriculum</p>

                <div className="progress-bar small">
                  <div className="progress-fill grey" style={{ width: "0%" }} />
                </div>
              </div>

              <div className="quiz-card disabled">
                <p className="quiz-status cyan">Completed</p>
                <h4>Intro to Python</h4>
                <p className="small-muted">Beginner Track</p>

                <div className="progress-bar small">
                  <div className="progress-fill cyan" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="right-column">

            {/* ARC PROGRESS */}
            <div className="progress-box">
              <h3>Course Progress</h3>

              {/* Your UI unchanged */}
              <div className="arc-container">
                <svg viewBox="0 0 100 50" className="arc-svg">
                  <path d="M 10 50 A 40 40 0 0 1 90 50" className="arc-track" />
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    className="arc-primary"
                    style={{ strokeDasharray: "125.6", strokeDashoffset: "31.4" }}
                  />
                  <path d="M 20 50 A 30 30 0 0 1 80 50" className="arc-track" />
                  <path
                    d="M 20 50 A 30 30 0 0 1 80 50"
                    className="arc-magenta"
                    style={{ strokeDasharray: "94.2", strokeDashoffset: "47.1" }}
                  />
                  <path d="M 30 50 A 20 20 0 0 1 70 50" className="arc-track" />
                  <path
                    d="M 30 50 A 20 20 0 0 1 70 50"
                    className="arc-violet"
                    style={{ strokeDasharray: "62.8", strokeDashoffset: "50.24" }}
                  />
                </svg>
              </div>

              <div className="progress-list">
                <p><span className="dot cyan"></span> Core Curriculum: 75%</p>
                <p><span className="dot pink"></span> Advanced Topics: 50%</p>
                <p><span className="dot violet"></span> Specialization: 20%</p>
              </div>
            </div>

            {/* BADGES */}
            <div className="badges-box">
              <h3>Cyber Badges</h3>

              <div className="badges-grid">
                <div className="badge neon">💻</div>
                <div className="badge neon">🔗</div>
                <div className="badge neon">🐞</div>
                <div className="badge locked">🔒</div>
                <div className="badge locked">🔒</div>
                <div className="badge locked">🔒</div>
              </div>
            </div>

          </aside>

        </div>

      </main>

    </div>
  );
};

export default StudentDashboard;
