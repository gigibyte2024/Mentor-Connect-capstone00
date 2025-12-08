// src/StudentMentorDiscover.jsx
import React, { useEffect, useState } from "react";
import "./student-mentor-discover.css";
import { useNavigate } from "react-router-dom";
import API from "./api/axiosInstance";

const StudentMentorDiscover = () => {
  const navigate = useNavigate();

  // -------------------- STATES --------------------
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("rating");
  const [page, setPage] = useState(1);

  // -------------------- FETCH MENTORS --------------------
  const fetchMentors = async () => {
    try {
      setLoading(true);

      const res = await API.get(
        `/mentors?search=${search}&sort=${sort}&page=${page}`
      );

      console.log("MENTORS API RESPONSE:", res.data);

      // SAFELY extract mentors no matter what backend sends
      const mentorList =
        res.data.mentors ||
        res.data.data ||
        (Array.isArray(res.data) ? res.data : []) ||
        [];

      setMentors(mentorList);
    } catch (err) {
      console.error("Mentor fetch error:", err);
      setMentors([]); // Prevent UI crash
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, [search, sort, page]);

  // -------------------- CONNECT BUTTON --------------------
  const handleConnect = async (mentorId) => {
    try {
      await API.post(`/chat/start`, { mentorId });
      alert("Connection request sent!");
    } catch (err) {
      console.error("Connect error:", err);
    }
  };

  return (
    <div className="mentors-page">
      {/* ---------------- TOP NAV ---------------- */}
      <header className="mentors-header">
        <div className="header-left">
          <div className="brand-icon">⫸</div>
          <h2 className="brand-name">Commit Connect</h2>

          <nav className="top-nav">
            <button className="top-nav-link" onClick={() => navigate("/student-dashboard")}>
              Dashboard
            </button>
            <button className="top-nav-link active">Mentors</button>
            <button className="top-nav-link" onClick={() => navigate("/quizzes")}>
              Quests
            </button>
            <button className="top-nav-link" onClick={() => navigate("/profile")}>
              Profile
            </button>
          </nav>
        </div>

        <div className="header-right">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">⚙</button>

          <div
            className="header-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpElcIjTbFR6-k2YsjNLXMjvi4qCxmAXtFF7nzFcsHvJgf-5ABZPPm8hWaj2xWqyURN_WfdZZYeYYejhNRFCelmGgk7m-FsGHlVB64XQu0k9CbnZv12Gz_bEa7QqxJlVzll76W3yK7o8Gt1nBXA_eySqIykPeZ-_6o_a3x8k3k--M9kEj6etSIhK4IiePUK5GzxxaDo8DlQ1IzfAXozPPFetHAlQlwq6JKObp4hOvEtPyrDMn0kEjjRMKEia_jAWdznCKLnaVzdFs')",
            }}
          ></div>
        </div>
      </header>

      {/* ============ MAIN LAYOUT ============ */}
      <div className="mentors-layout">

        {/* ----------- FILTER SIDEBAR ----------- */}
        <aside className="mentors-filters">
          <h3 className="filters-title">Filters</h3>
          <button
            className="clear-filters-btn"
            onClick={() => {
              setSearch("");
              setSort("rating");
              setPage(1);
            }}
          >
            🗑 Clear Filters
          </button>
        </aside>

        {/* ----------- MAIN CONTENT ----------- */}
        <main className="mentors-main">
          <div className="mentors-main-inner">

            {/* Heading */}
            <div className="page-heading">
              <h1>Find Your Mentor</h1>
              <p>Connect with top-tier professionals in the tech industry.</p>
            </div>

            {/* Search + Sort */}
            <div className="search-row">
              <div className="search-wrapper">
                <span className="search-icon">🔎</span>
                <input
                  className="search-input"
                  placeholder="Search by name, skill, company..."
                  value={search}
                  onChange={(e) => {
                    setPage(1);
                    setSearch(e.target.value);
                  }}
                />
              </div>

              <select
                className="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="rating">Sort by: Rating</option>
                <option value="experience">Sort by: Experience</option>
              </select>
            </div>

            {/* -------- LOADING -------- */}
            {loading && <p className="loading-text">Loading mentors...</p>}

            {/* -------- MENTORS GRID -------- */}
            <div className="mentors-grid">

              {!loading && mentors.length === 0 && (
                <p className="no-results">No mentors found.</p>
              )}

              {(mentors || []).map((m) => (
                <div key={m.id} className="mentor-card">
                  <button className="bookmark-btn">☆</button>

                  <div className="mentor-top">
                    <div
                      className="mentor-avatar"
                      style={{
                        backgroundImage: `url("https://via.placeholder.com/150")`,
                      }}
                    />

                    <div className="mentor-info">
                      <p className="mentor-name">{m?.user?.name || "Unnamed Mentor"}</p>
                      <p className="mentor-title">{m?.experience || "Experience not mentioned"}</p>
                      <div className="mentor-rating">
                        <span>★</span> {m?.rating || "N/A"}
                      </div>
                    </div>
                  </div>

                  <div className="mentor-tags">
                    {(m.skills || "")
                      .split(",")
                      .filter((skill) => skill.trim() !== "")
                      .map((skill, index) => (
                        <span key={index} className="tag tag-primary">
                          {skill.trim()}
                        </span>
                      ))}
                  </div>

                  <button
                    className="connect-btn"
                    onClick={() => handleConnect(m.id)}
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>

            {/* -------- PAGINATION -------- */}
            <div className="pagination">
              <button
                className="page-arrow"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                ‹
              </button>

              <button className="page-dot page-dot-active">{page}</button>

              <button
                className="page-arrow"
                onClick={() => setPage(page + 1)}
              >
                ›
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentMentorDiscover;
