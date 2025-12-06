import React, { useState } from "react";
import "./mentor-dashboard.css";
import MentorResources from "./UpdatedMentorResources";

const MentorDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [openResourcesDropdown, setOpenResourcesDropdown] = useState(false);

  return (
    <div className="dashboard-wrapper">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">

          {/* MENTOR INFO */}
          <div className="mentor-info">
            <div
              className="mentor-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmUiKcmXHg1Tw2WT_MmZq8FpWJoVkXjiD7fz-p7-dEWzC5fzX_jtqBPnjVfE3TY_mlzDZwWQeYsMkcnDq2OcDHtfih3-E0-n6v7plIwTUzkY6uRPEz3by8l0nbOUIW2BVd2Yk16GHBrqR4oawuVJ20VxfL8zNGc7Fd7DLAmsHqeymhaWU-7XQ6aBBx6Y7Aym2LPfLnJHy5TlvahgE09NyQqaM0u4zOCqppKeQljvhoNZx73FKC7xAJ0UfAAXku5YeRGJrDzmLVqPQ')",
              }}
            ></div>

            <div>
              <h3 className="mentor-name">Alex Cypher</h3>
              <p className="mentor-role">Cyberpunk Mentor</p>
            </div>
          </div>

          {/* MENU */}
          <nav className="sidebar-menu">

            {/* Dashboard */}
            <a
              className={`menu-item ${activePage === "dashboard" ? "active" : ""}`}
              onClick={() => setActivePage("dashboard")}
            >
              📊 Dashboard
            </a>

            <a className="menu-item">👥 Students</a>
            <a className="menu-item">📨 Requests</a>
            <a className="menu-item">💬 Chat</a>

            {/* RESOURCES DROPDOWN */}
            <div className="menu-item resource-dropdown">
              <span
                onClick={() => setOpenResourcesDropdown(!openResourcesDropdown)}
                style={{ cursor: "pointer" }}
              >
                📁 Resources ▾
              </span>

              {openResourcesDropdown && (
                <div className="dropdown">
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setActivePage("view-resources");
                      setOpenResourcesDropdown(false);
                    }}
                  >
                    View Resources
                  </a>

                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setActivePage("add-resources");
                      setOpenResourcesDropdown(false);
                    }}
                  >
                    Add Resource
                  </a>
                </div>
              )}
            </div>

            <a
              className={`menu-item ${activePage === "profile" ? "active" : ""}`}
              onClick={() => setActivePage("profile")}
            >
              👤 Profile
            </a>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="sidebar-bottom">
          <a className="menu-item">⚙ Settings</a>
          <a className="menu-item">🚪 Logout</a>
        </div>
      </aside>

      {/* MAIN SECTION */}
      <div className="main">

        {/* TOP NAV BAR */}
        <header className="topbar">
          <div className="topbar-left">
            <div className="logo-icon"></div>
            <h2 className="topbar-title">Commit Connect</h2>
          </div>

          <div className="topbar-right">
            <input className="search-box" placeholder="Search..." />
            <button className="notif-btn">🔔</button>

            <div
              className="top-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-Qu8rzzmIRpZfYVSSKIwV8bRqBfbnD62WZB_v3DW9O4VoxDasPlIDYsbuX9cbWwIgtIV1FCjbhRmoSCCTnkdGx26X3QExOCuPMj8b4rsHXXej9V6yj8UU4YmuH2LQ0wMeo2DRHLidSUyHTkKU383GZ2vpSRIhI1xNLFkoxfoMSTCf1Es6EvpVx3yxj2zp9XLqi4pFgv9CQwGJ_IDjeJJX9FdR94ZuYOQFlriXh6ByMLFRUieXpiqPSHt8hWSatBYaHnmf608KePk')",
              }}
            ></div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="content">

          {/* DASHBOARD HOME */}
          {activePage === "dashboard" && (
            <>
              <h1 className="page-title">Mentor Hub</h1>

              <div className="grid">

                {/* LEFT */}
                <div className="left-col">
                  {/* Stats */}
                  <div className="stat-box">
                    <p className="stat-label">Active Mentees</p>
                    <p className="stat-value">12</p>
                    <p className="stat-change">+2 this month</p>
                  </div>

                  <div className="stat-box">
                    <p className="stat-label">Total Sessions</p>
                    <p className="stat-value">88</p>
                    <p className="stat-change">+5 this month</p>
                  </div>

                  <div className="stat-box">
                    <p className="stat-label">Average Feedback Score</p>
                    <p className="stat-value">4.9/5</p>
                    <p className="stat-change">+0.1 this month</p>
                  </div>

                  {/* Sessions */}
                  <div className="session-box">
                    <h2 className="session-title">Upcoming Sessions</h2>

                    <div className="timeline">
                      <div className="timeline-item">
                        <span className="dot"></span>
                        <p className="time">Today - 14:00</p>
                        <p className="session-heading">Project Review with Neo</p>
                        <p className="session-desc">Discussing latest PR...</p>
                      </div>

                      <div className="timeline-item">
                        <span className="dot"></span>
                        <p className="time">Tomorrow - 10:00</p>
                        <p className="session-heading">Career Pathing with Trinity</p>
                        <p className="session-desc">Planning Senior Dev path...</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="right-col">
                  <div className="table-box">
                    <h2 className="table-title">Mentee Requests</h2>
                    {/* existing table kept exactly as you wrote*/}
                  </div>
                </div>

              </div>
            </>
          )}

          {/* VIEW RESOURCES */}
          {activePage === "view-resources" && (
            <MentorResources mode="view" />
          )}

          {/* ADD RESOURCES */}
          {activePage === "add-resources" && (
            <MentorResources mode="add" />
          )}

          {/* PROFILE */}
          {activePage === "profile" && (
            <h1 className="page-title">Profile Coming Soon...</h1>
          )}

        </main>
      </div>

      {/* REMOVED FLOATING ADD BUTTON */}
    </div>
  );
};

export default MentorDashboard;
