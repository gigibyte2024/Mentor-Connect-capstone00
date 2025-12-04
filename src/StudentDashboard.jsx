import React from "react";
import "./student-dashboard.css";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="student-wrapper">
      {/* SIDEBAR */}
      <aside className="student-sidebar">

        <div className="sidebar-logo">
          <div className="logo-icon"></div>
          <h2 className="logo-text">Commit Connect</h2>
        </div>

        <div className="sidebar-menu">
          <p className="menu-item active">📊 Dashboard</p>

          {/* Discover Mentors */}
          <p
            className="menu-item"
            onClick={() => navigate("/student-mentors")}
            style={{ cursor: "pointer" }}
          >
            👤 Discover Mentors
          </p>

          {/* Quizzes */}
          <p
            className="menu-item"
            onClick={() => navigate("/quizzes")}
            style={{ cursor: "pointer" }}
          >
            🧠 Quizzes
          </p>

          {/* ⭐ CHAT BUTTON — UPDATED */}
          <p
            className="menu-item"
            onClick={() => navigate("/chat")}
            style={{ cursor: "pointer" }}
          >
            💬 Chat
          </p>

          <p className="menu-item">⚙ Profile</p>
        </div>

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
              <p className="student-name">Jane "Glitch" Doe</p>
              <p className="student-role">Cyber Knight</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="student-main">
        {/* TOP BAR */}
        <header className="topbar">
          <h1 className="top-title">Welcome Back, Jane!</h1>

          <div className="top-stats">
            <div className="stats-box">
              <p>Points:</p>
              <strong className="cyan-text">12,500</strong>
            </div>

            <div className="stats-box">
              <p>Level:</p>
              <strong className="cyan-text">12</strong>
            </div>

            <button className="notif-btn">🔔</button>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="main-grid">

          {/* LEFT COLUMN */}
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
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
            </div>

            {/* Discover Mentors */}
            <div className="section-title">Discover Mentors</div>

            <div className="mentor-grid">

              <div className="mentor-card">
                <div
                  className="mentor-img"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7QCtQ6cNN1H0t8kYkGxZ1PH9DnOarmX1PhD10cJkaSyfXepaO9yKXEGwqLJf8W6MF0tlXaWkSrR5YMQfDah7lOyljDyP3PNc792OQU_9HygjTRiSwMQPKQ-9Ja9726KPs3wXe-zmt9eBdLYy5o8HHduFKosEAxfS1jbJrtKb4GDJf8HWl6aV88Dv-whrA1IRK0AAcomjRrA8A7jjS-sRrv4fhQVO0YFxwXQXDoTB-qtGacDBXUxqdPJ57mmsPwxqLkWyo--SOWnQ')",
                  }}
                ></div>
                <p className="mentor-name">Alex "Cipher" Chen</p>
                <p className="mentor-skill">AI Engineering</p>
                <button className="connect-btn">Connect</button>
              </div>

              <div className="mentor-card">
                <div
                  className="mentor-img"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd9C8GPkT8FFbQpcqXbV2f7_g_tHeiTGvPP-MC91dkMcjXLOoRskR1rUQp8P9S1VTDn0u99B7DymEGzHcj7Jp1nszHMcHa_-xPP-Gh1s-nu5OqCCeWlN46sJhxaNm244RSs86SfTMbwtN0H5XpOn2Dc3T7YVfDD3-pcuP1yUqRWFhsno38zvYqvnWsCXI_FuZdLt0jKOGzkmkKjGd6sNFppEn9EopwYPKUoVv4bEfkHhgIft6tj5sqnqYcVy3qZn3cNQO7WjmHJZM')",
                  }}
                ></div>
                <p className="mentor-name">Maya "Oracle" Ito</p>
                <p className="mentor-skill">Quantum Computing</p>
                <button className="connect-btn">Connect</button>
              </div>

              <div className="mentor-card">
                <div
                  className="mentor-img"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZfEL0PbMMN04MYwVw1xK8EAMN5Ul0vefLhray1Cs11XfaisucRougTHvvDi5FLfO37qI4Jhkw8FpIQ6pEktP9laqfKnjy87p7umqeI360eth68bsaKSaUyjrugADKLPGvDzfiimxvJvzC7SDHCQshH-QmnMJu0rcii_diKZ4yNPQUn8ehDuVU7NbM2Gr6gzl4vCFWqJCEZuR-Gwa2DDVyJuP3hpsRozulR_lb9R-YtphFKFoRiQaxow7xVC_WTWa962S7RNxQDk')",
                  }}
                ></div>
                <p className="mentor-name">Ben "Node" Carter</p>
                <p className="mentor-skill">Web3 Development</p>
                <button className="connect-btn">Connect</button>
              </div>

            </div>

            {/* Quizzes */}
            <div className="section-title">Active Quizzes</div>

            <div className="quiz-grid">

              <div className="quiz-card">
                <p className="quiz-status pink">In Progress</p>
                <h4>Cryptography Basics</h4>
                <p className="small-muted">Security Module</p>
                <div className="progress-bar small">
                  <div className="progress-fill pink" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="quiz-card">
                <p className="quiz-status">Not Started</p>
                <h4>Data Structures Challenge</h4>
                <p className="small-muted">Core Curriculum</p>
                <div className="progress-bar small">
                  <div className="progress-fill grey" style={{ width: "0%" }}></div>
                </div>
              </div>

              <div className="quiz-card disabled">
                <p className="quiz-status cyan">Completed</p>
                <h4>Intro to Python</h4>
                <p className="small-muted">Beginner Track</p>
                <div className="progress-bar small">
                  <div className="progress-fill cyan" style={{ width: "100%" }}></div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="right-column">
            <div className="progress-box">
              <h3>Course Progress</h3>
              <div className="progress-list">
                <p><span className="dot cyan"></span> Core Curriculum: 75%</p>
                <p><span className="dot pink"></span> Advanced Topics: 50%</p>
                <p><span className="dot violet"></span> Specialization: 20%</p>
              </div>
            </div>

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
