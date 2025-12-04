import React, { useState } from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRoleSelect = (role) => {
    // Save selected role
    localStorage.setItem("selectedRole", role);

    // Close dropdown
    setShowDropdown(false);

    // Take user to login/signup page
    navigate("/auth");
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-overlay"></div>

      {/* HEADER */}
      <header className="landing-header">
        <div className="header-left">
          <div className="icon-diamond"></div>
          <h2 className="brand-title">Commit Connect</h2>
        </div>

        <nav className="header-nav">
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="landing-main">
        <h1 className="landing-title">Commit Connect</h1>
        <p className="landing-subtitle">Level Up Your Skills. Connect Your Future.</p>

        {/* BUTTONS */}
        <div className="landing-btns">

          <button
            className="primary-btn"
            onClick={() => {
              const savedRole = localStorage.getItem("selectedRole");

              // If role not selected, ask user by opening dropdown
              if (!savedRole) {
                setShowDropdown(true);
                return;
              }

              navigate("/auth");
            }}
          >
            Login / Signup
          </button>

          {/* ROLE DROPDOWN */}
          <div className="dropdown-wrapper">
            <button
              className="secondary-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Select Role ▾
            </button>

            {showDropdown && (
              <div className="role-dropdown">
                <p onClick={() => handleRoleSelect("student")}>Student</p>
                <p onClick={() => handleRoleSelect("mentor")}>Mentor</p>
              </div>
            )}
          </div>

        </div>

        {/* Features */}
        <div className="features-row">
          <div className="feature-box">🎮 Gamified Quests</div>
          <div className="feature-box">🤖 AI Mentorship</div>
          <div className="feature-box">🌲 Skill Trees</div>
          <div className="feature-box">👥 Community Hub</div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-links">
          <a className="footer-link" href="#">Privacy Policy</a>
          <a className="footer-link" href="#">Terms of Service</a>
        </div>

        <div className="footer-icons">
          <span className="footer-icon">💻</span>
          <span className="footer-icon">🔗</span>
        </div>

        <p className="footer-copy">
          © 2024 Commit Connect. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
