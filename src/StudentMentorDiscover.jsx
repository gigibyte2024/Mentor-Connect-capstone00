// src/StudentMentorDiscover.jsx
import React from "react";
import "./student-mentor-discover.css";
import { useNavigate } from "react-router-dom";

const StudentMentorDiscover = () => {
  const navigate = useNavigate();

  return (
    <div className="mentors-page">
      {/* ============ TOP NAVBAR ============ */}
      <header className="mentors-header">
        <div className="header-left">
          <div className="brand-icon">⫸</div>
          <h2 className="brand-name">Commit Connect</h2>

          <nav className="top-nav">
            <button
              className="top-nav-link"
              type="button"
              onClick={() => navigate("/student-dashboard")}
            >
              Dashboard
            </button>
            <button className="top-nav-link active" type="button">
              Mentors
            </button>
            <button
              className="top-nav-link"
              type="button"
              onClick={() => navigate("/quizzes")}
            >
              Quests
            </button>
            <button
              className="top-nav-link"
              type="button"
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
          </nav>
        </div>

        <div className="header-right">
          <button className="icon-btn" type="button">
            🔔
          </button>
          <button className="icon-btn" type="button">
            ⚙
          </button>

          <div
            className="header-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpElcIjTbFR6-k2YsjNLXMjvi4qCxmAXtFF7nzFcsHvJgf-5ABZPPm8hWaj2xWqyURN_WfdZZYeYYejhNRFCelmGgk7m-FsGHlVB64XQu0k9CbnZv12Gz_bEa7QqxJlVzll76W3yK7o8Gt1nBXA_eySqIykPeZ-_6o_a3x8k3k--M9kEj6etSIhK4IiePUK5GzxxaDo8DlQ1IzfAXozPPFetHAlQlwq6JKObp4hOvEtPyrDMn0kEjjRMKEia_jAWdznCKLnaVzdFs')",
            }}
          />
        </div>
      </header>

      {/* ============ LAYOUT ============ */}
      <div className="mentors-layout">
        {/* -------- FILTER SIDEBAR -------- */}
        <aside className="mentors-filters">
          <h3 className="filters-title">Filters</h3>

          {/* Domain */}
          <div className="filter-block">
            <h4 className="filter-heading">Domain</h4>
            <label className="filter-option">
              <input type="checkbox" /> <span>AI / ML</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" defaultChecked />{" "}
              <span>Cybersecurity</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" /> <span>Web3</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" /> <span>Game Dev</span>
            </label>
          </div>

          {/* Experience */}
          <div className="filter-block">
            <h4 className="filter-heading">Experience</h4>
            <label className="filter-option">
              <input type="checkbox" /> <span>5+ years</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" defaultChecked /> <span>10+ years</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" /> <span>Lead / Principal</span>
            </label>
          </div>

          {/* Rating */}
          <div className="filter-block">
            <h4 className="filter-heading">Rating</h4>
            <label className="filter-option">
              <input type="radio" name="rating" /> <span>4★ &amp; Up</span>
            </label>
            <label className="filter-option">
              <input type="radio" name="rating" /> <span>3★ &amp; Up</span>
            </label>
          </div>

          {/* Availability */}
          <div className="filter-block">
            <h4 className="filter-heading">Availability</h4>
            <label className="filter-option">
              <input type="checkbox" defaultChecked />{" "}
              <span>Available Now</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" /> <span>Accepting Mentees</span>
            </label>
          </div>

          <button className="clear-filters-btn" type="button">
            🗑 Clear Filters
          </button>
        </aside>

        {/* -------- MAIN CONTENT -------- */}
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
                />
              </div>

              <div className="sort-wrapper">
                <select className="sort-select">
                  <option>Sort by: Relevance</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Experience</option>
                </select>
              </div>
            </div>

            {/* Mentor Cards Grid */}
            <div className="mentors-grid">
              {/* CARD 1 */}
              <div
                className="mentor-card"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/mentor-profile")}
              >
                <button className="bookmark-btn" type="button">
                  ☆
                </button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCk2NZ6ErCX1q5d36pco1fdz2Au7lBizBPfOw_TKvRmkBZ_ds9E9xLU5s7flYMo8nlMtgE-siuNqud7XZ-uHAMM4lrw7WW-0Kd-j7cXmx8wXG5Gj122z5tFM8sfl1ofLrLTpoQtVOjgVOjGZtZ6eVoODCYFKoLfxUEKYtNPfK4NwWciOelDJQ5Jq_G2h4Wnj4WOX9pT-ECDdUdwy4U99swaO0vjqN_sUTOSqi5zTTAzn_oErYAb47WBgZOhj1gxiXwJo8l92lFyYo0')",
                    }}
                  />
                  <div className="mentor-info">
                    <p className="mentor-name">Jax "Glitch" Ryker</p>
                    <p className="mentor-title">
                      Principal Engineer @ OmniCorp
                    </p>
                    <div className="mentor-rating">
                      <span>★</span> 5.0
                    </div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">AI / ML</span>
                  <span className="tag tag-magenta">Game Dev</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="mentor-card">
                <button className="bookmark-btn" type="button">
                  ☆
                </button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-qxFEWNvjwSBIupQYJwvL2uXIJv36zLMiHOm9rEdpcS8m86K8VWXQDsIPg2LGkPk2yCrUanOSt2eklEk3HQnKXHooxz635GX5F-ENEoAheQoR0XXpzZzaAxUJ8SYG27GfFpFnCuPzOusL0F1aLdz0aUzlgpzP09md-yH2MhK6bhgJyaGgukUSydx18fZm0aLG2XJ5DWkwLJ2VZ0dU9CF4GJEsZGh8ldnI-KaWhtnIKSZoAB1zGGIUm9rNW31G5weHJNOAsiYPfVE')",
                    }}
                  />
                  <div className="mentor-info">
                    <p className="mentor-name">Cyra "Vex" Nova</p>
                    <p className="mentor-title">Lead Cybersecurity Analyst</p>
                    <div className="mentor-rating">
                      <span>★</span> 4.9
                    </div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">Cybersecurity</span>
                  <span className="tag tag-magenta">Red Teaming</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="mentor-card">
                <button className="bookmark-btn" type="button">
                  ☆
                </button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdRucR63E4wF6m5ZmfcQtXYw2pU9B5uBDGz4PKpPYB3tHxgkuKncl0WThIiJW3lsNFrgLFUeRpX_26bUzLeo6EJ2sqKWTcacmHqOKG-08tbHHHESJI9xg9BPGbyMuDBkBkHQJq3nc4FLjUI71GjdPLivvyTbjem_OviTzMSmpolmGLqq0cdTq26YRS5W1ElIbGlTywjEKmLh33byp0hxT0xkk8cFl9Za2n8ESUHvvPFlOmFg7XpuJR8OKaFagHO6dlKUrCOWn6lXO')",
                    }}
                  />
                  <div className="mentor-info">
                    <p className="mentor-name">Kael "Neon" Verto</p>
                    <p className="mentor-title">Senior Web3 Developer</p>
                    <div className="mentor-rating">
                      <span>★</span> 4.8
                    </div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">Web3</span>
                  <span className="tag tag-magenta">Blockchain</span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-arrow" type="button">
                ‹
              </button>
              <button
                className="page-dot page-dot-active"
                type="button"
              >
                1
              </button>
              <button className="page-dot" type="button">
                2
              </button>
              <button className="page-dot" type="button">
                3
              </button>
              <span className="page-ellipsis">…</span>
              <button className="page-dot" type="button">
                8
              </button>
              <button className="page-arrow" type="button">
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
