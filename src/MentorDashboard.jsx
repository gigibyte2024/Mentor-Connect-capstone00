import React from "react";
import "./mentor-dashboard.css";
import { useNavigate } from "react-router-dom";

const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
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
            <a className="menu-item active">📊 Dashboard</a>
            <a className="menu-item">👥 Students</a>
            <a className="menu-item">📨 Requests</a>
            <a className="menu-item">💬 Chat</a>

            {/* ⭐ UPDATED: RESOURCES NOW NAVIGATES */}
            <a
              className="menu-item"
              onClick={() => navigate("/mentor-resources")}
              style={{ cursor: "pointer" }}
            >
              📁 Resources
            </a>

            <a className="menu-item">👤 Profile</a>
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

          <h1 className="page-title">Mentor Hub</h1>

          {/* GRID */}
          <div className="grid">

            {/* LEFT COLUMN */}
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

              {/* Upcoming Sessions */}
              <div className="session-box">
                <h2 className="session-title">Upcoming Sessions</h2>

                <div className="timeline">

                  <div className="timeline-item">
                    <span className="dot"></span>
                    <p className="time">Today - 14:00</p>
                    <p className="session-heading">Project Review with Neo</p>
                    <p className="session-desc">
                      Discussing the latest PR on the 'Matrix' repo.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span className="dot"></span>
                    <p className="time">Tomorrow - 10:00</p>
                    <p className="session-heading">Career Pathing with Trinity</p>
                    <p className="session-desc">
                      Planning next steps for Senior Dev role.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span className="dot"></span>
                    <p className="time">28 July, 2077 - 16:30</p>
                    <p className="session-heading">Code Pairing with Morpheus</p>
                    <p className="session-desc">
                      Live coding session on advanced React hooks.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-col">
              <div className="table-box">
                <h2 className="table-title">Mentee Requests</h2>

                <table className="req-table">
                  <thead>
                    <tr>
                      <th>Mentee Name</th>
                      <th>Request Date</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="user-cell">
                        <div
                          className="user-avatar"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUuFfUIJpS7rIqIXZmKXOeOTVKaSYBkHmSAJVkedEySt-t9BZ_svvPfs7aVeKMMF-nZXfhZyWuE2JYlqs9GcCwJcmMlUPK3Nzb8vGBIgEzM9eWPMpeA0ndoTXhdbiVf8pDfDjwGleuL1TGy7HRG0Y7Na_L251zvDJek1OXVDeiWT4IurlEmkU7AifN_UtfqsAG4RZeS20hcoS_py4F49EiD5JoWD5jaTZSYE5U3jXLx8j6GRvuh7PrgwPafaXKWOOR1lCZGg4Kw')",
                          }}
                        ></div>
                        Jaxon "Glitch" Rye
                      </td>

                      <td>20 July, 2077</td>

                      <td>"Looking for help with quantum computing basics..."</td>

                      <td className="actions">
                        <button className="view-btn">View Profile</button>
                        <button className="accept-btn">Accept</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="user-cell">
                        <div
                          className="user-avatar"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxJkoahuWaT99fMr4Su8-s1M4iLs6o9sRvH9Khz3PxuWbNqyw9k5eniFKE7ldxBcC7Hm7FIkeufFd4wKrOJTT1GXpmWKRVLLnwj4Kaw64cEXSUiyyM1iQ0KovpVgOM2iwqXHeVIH5ocjIZk0ibCLyx1DJr-Hk-l8ueHDJVK8uW94O_CPDYfwbCf0yMlK9pO8v5mvSCkzHnBG2mzL1JUxrQphgFjEZ8Er6rdjCGEJ9CCAXs1qByMe0Ecf38Ozknu6w3gVIM91cInzI')",
                          }}
                        ></div>
                        Kiera "Echo" Valerius
                      </td>

                      <td>19 July, 2077</td>

                      <td>"Need guidance on my latest neural network project."</td>

                      <td className="actions">
                        <button className="view-btn">View Profile</button>
                        <button className="accept-btn">Accept</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="user-cell">
                        <div
                          className="user-avatar"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwG1dxtcdCljiFp7juI85T_viD0wE40QgRdlScnwug1xvB7btQkFmp18nYJOOE4ejxbaJpAvgq8dUWymrf5Iq-kAZCOCUQ9yqx1Fl2rLBqFBp5ULcCszZ_9vQuXEtagNJLR28x1I-nHZFOgJSTu8bdh8SBXWwM9n5sJa1eqBj06uoNrCUob_E3eQdtI-wcMAru4DjLEN46glYtXzbAK2KiZ7WE0dfzKw-bBxOx7JHGUIUBW6b2oQktTxIuj9DWzN2XJsmqIoXnu0o')",
                          }}
                        ></div>
                        Zephyr "Byte" Kai
                      </td>

                      <td>18 July, 2077</td>

                      <td>"Stuck on a data encryption algorithm..."</td>

                      <td className="actions">
                        <button className="view-btn">View Profile</button>
                        <button className="accept-btn">Accept</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>

      </div>

      {/* FLOATING ADD BUTTON */}
      <button className="add-btn">＋</button>
    </div>
  );
};

export default MentorDashboard;
