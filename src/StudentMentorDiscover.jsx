import React from "react";
import "./student-mentor-discover.css";
import { useNavigate } from "react-router-dom";

const StudentMentorDiscover = () => {
  const navigate = useNavigate();

  return (
    <div className="mentors-page">
      {/* TOP NAVBAR */}
      <header className="mentors-header">
        <div className="header-left">
          <div className="brand-icon">⫸</div>
          <h2 className="brand-name">Commit Connect</h2>

          <nav className="top-nav">
            <a href="#" className="top-nav-link">Dashboard</a>
            <a href="#" className="top-nav-link active">Mentors</a>
            <a href="#" className="top-nav-link">Quests</a>
            <a href="#" className="top-nav-link">Profile</a>
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
          />
        </div>
      </header>

      <div className="mentors-layout">
        {/* FILTER SIDEBAR */}
        <aside className="mentors-filters">
          <h3 className="filters-title">Filters</h3>

          {/* Domain */}
          <div className="filter-block">
            <h4 className="filter-heading">Domain</h4>
            <label className="filter-option"><input type="checkbox" /> AI / ML</label>
            <label className="filter-option"><input type="checkbox" defaultChecked /> Cybersecurity</label>
            <label className="filter-option"><input type="checkbox" /> Web3</label>
            <label className="filter-option"><input type="checkbox" /> Game Dev</label>
          </div>

          {/* Experience */}
          <div className="filter-block">
            <h4 className="filter-heading">Experience</h4>
            <label className="filter-option"><input type="checkbox" /> 5+ years</label>
            <label className="filter-option"><input type="checkbox" defaultChecked /> 10+ years</label>
            <label className="filter-option"><input type="checkbox" /> Lead / Principal</label>
          </div>

          {/* Rating */}
          <div className="filter-block">
            <h4 className="filter-heading">Rating</h4>
            <label className="filter-option"><input type="radio" name="rating" /> 4★ & Up</label>
            <label className="filter-option"><input type="radio" name="rating" /> 3★ & Up</label>
          </div>

          {/* Availability */}
          <div className="filter-block">
            <h4 className="filter-heading">Availability</h4>
            <label className="filter-option"><input type="checkbox" defaultChecked /> Available Now</label>
            <label className="filter-option"><input type="checkbox" /> Accepting Mentees</label>
          </div>

          <button className="clear-filters-btn">🗑 Clear Filters</button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="mentors-main">
          <div className="mentors-main-inner">

            {/* Page title */}
            <div className="page-heading">
              <h1>Find Your Mentor</h1>
              <p>Connect with top-tier professionals in the tech industry.</p>
            </div>

            {/* Search + Sort */}
            <div className="search-row">
              <div className="search-wrapper">
                <span className="search-icon">🔎</span>
                <input className="search-input" placeholder="Search by name, skill, or keyword..." />
              </div>

              <div className="sort-wrapper">
                <select className="sort-select">
                  <option>Sort by: Relevance</option>
                  <option>Rating (High → Low)</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Mentor GRID */}
            <div className="mentors-grid">

              {/* ------------- MENTOR CARD 1 ------------- */}
              <div
                className="mentor-card"
                onClick={() => navigate("/mentor-profile")}
              >
                <button className="bookmark-btn">☆</button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCk2NZ6ErCX1q5d36pco1fdz2Au7lBizBPfOw_TKvRmkBZ_ds9E9xLU5s7flYMo8nlMtgE-siuNqud7XZ-uHAMM4lrw7WW-0Kd-j7cXmx8wXG5Gj122z5tFM8sfl1ofLrLTpoQtVOjgVOjGZtZ6eVoODCYFKoLfxUEKYtNPfK4NwWciOelDJQ5Jq_G2h4Wnj4WOX9pT-ECDdUdwy4U99swaO0vjqN_sUTOSqi5zTTAzn_oErYAb47WBgZOhj1gxiXwJo8l92lFyYo0')",
                    }}
                  />
                  <div className="mentor-info">
                    <p className="mentor-name">Jax 'Glitch' Ryker</p>
                    <p className="mentor-title">Principal Engineer @ OmniCorp</p>
                    <div className="mentor-rating"><span>★</span>5.0</div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">AI / ML</span>
                  <span className="tag tag-magenta">Game Dev</span>
                </div>
              </div>

              {/* ------------- CARD 2 ------------- */}
              <div className="mentor-card" onClick={() => navigate("/mentor-profile")}>
                <button className="bookmark-btn filled">★</button>
                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzWbg92iJylXup5Wny4RVuIWcSZ4t9K7kElzCtVPp8EfuVDh0Kua4cwGfD_Mz3IQzjRSOyi6qv9wa8vX3UI8Gskn1btacnnyUVsjE6oZo0Msx5OuwgVulluU81Ly6zNwxpehiwU5WvdvvRhY59eXZNdhEijlT5DVVI-xBhQaE26g2NawPCYfwzxy6cCeJD8Ekkdq4ntY8gFHHg5flxzWc9Am0k5pBBw_p_kmwa8SsDeAvmXVXk-ZgyqMrq_xaBab4m7G0d64UU4cg')",
                    }}
                  />
                  <div className="mentor-info">
                    <p className="mentor-name">Cyra 'Vex' Nova</p>
                    <p className="mentor-title">Lead Cybersecurity Analyst</p>
                    <div className="mentor-rating"><span>★</span>4.9</div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">Cybersecurity</span>
                </div>
              </div>

              {/* ------------- CARD 3 ------------- */}
              <div className="mentor-card" onClick={() => navigate("/mentor-profile")}>
                <button className="bookmark-btn">☆</button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4kci2LIvd1Pz9N1sxr7tB9liqxWEEZs_beH_St68uamQG1W2VGQ9jhlT7RSyzCqUyf-3fyTzqC88RA_3vgZkos5Wu1CikSS5b-tUDxZq-UOuuNAm_5qY7eoDfyeT35tJluNMDyUaQ3vvwCLE47qfUIA0yklzNPfL3NIzZ5T8JYayeg5ho9PSUBaGEDpti8SGlamLPcclOLFz2oLFs6X-qFn1PG1ZE4EGiQaNLPM8ricHA7vSr-h__QQjuEvO6sXiogSXva76Bt-E')",
                    }}
                  />

                  <div className="mentor-info">
                    <p className="mentor-name">Kael 'Neon' Verto</p>
                    <p className="mentor-title">Senior Web3 Developer</p>
                    <div className="mentor-rating"><span>★</span>4.8</div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">Web3</span>
                  <span className="tag tag-magenta">Blockchain</span>
                </div>
              </div>

              {/* ------------- CARD 4 ------------- */}
              <div className="mentor-card" onClick={() => navigate("/mentor-profile")}>
                <button className="bookmark-btn">☆</button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzi8jp7j3f3E_wyl1ZNNKk4VU-oK2XFVcwNExoWbeCD32S3_8CO371YXXVLceoM_MJctSQFAI2Pg2r51jSCpzHJDePgr2Sn-Ho_7VWft_wQSvvW4-yy3GLoxG7whWO1Sy08Fz6cRPvHDVKzch4VXmgOlVVxumAKgLwnWy6DcVSAvmi6kcaTLYxtPD4elP5mJM6wF4GtLjtPXNgzx2eI96MGOf4HdyP_qAPOQEviaLl16eV-id06m4bcPgA-4cZM1GueqmradZh1HE')",
                    }}
                  />

                  <div className="mentor-info">
                    <p className="mentor-name">Nyx 'Hex' Volkov</p>
                    <p className="mentor-title">AI Architect @ CypherDyne</p>
                    <div className="mentor-rating"><span>★</span>4.8</div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">AI / ML</span>
                </div>
              </div>

              {/* ------------- CARD 5 ------------- */}
              <div className="mentor-card" onClick={() => navigate("/mentor-profile")}>
                <button className="bookmark-btn">☆</button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3h0VwEri4cRoAguTMpQX_N4pYC_kgb0BwMYIag6Hs5NEo70zvsIpkhrl9Rbsn4qwJDmfd5zw-EPqmBozWFoAFAn8l_OzQXi7AmekbN8D35aPwz49K_f7SVEqTzBlfrHgbcB53TxcIrKCIUBNdHxYn-g849JVa-NADpha6smE8XZVstYVSg1IMb9A5yjXz8t2_NYWiiUDWMyTCep1TCX8uVwWGoAn_hYvmbDZt0wgcc4N4OeLH4_18JkoYKKpEIpwfx3FbXzDr7jw')",
                    }}
                  />

                  <div className="mentor-info">
                    <p className="mentor-name">Ren 'Circuit' Tanaka</p>
                    <p className="mentor-title">Game Dev Lead @ NeonBlade</p>
                    <div className="mentor-rating"><span>★</span>4.7</div>
                  </div>
                </div>

                <div className="mentor-tags"><span className="tag tag-magenta">Game Dev</span></div>
              </div>

              {/* ------------- CARD 6 ------------- */}
              <div className="mentor-card" onClick={() => navigate("/mentor-profile")}>
                <button className="bookmark-btn">☆</button>

                <div className="mentor-top">
                  <div
                    className="mentor-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF4GsSlbBeuGCRaI3HRAJNWFsk0vGVCdFBO_j-DRPhD10_BZqJPSSG4mHMN2OzZbfHwZNFqF4AevWZgLRdtvhCbvnXyM1ZE0NyZOyGv5QC0QTE5jcAn9RVcXFyO_P_J0GpYKfl9MipU3_4TdjYOpm9IOzd5jv8OF6Yz5ULGjiH7mmJnKDTR7att2clZ8LC943Qg9UvpcUwDnqaRiF9bCZy4-uA1kznMEQC9l4zrDzX95vEnnCIOWj-Z9HNubXKJDw2BN03DhLls1k')",
                    }}
                  />

                  <div className="mentor-info">
                    <p className="mentor-name">Asra 'Void' Chen</p>
                    <p className="mentor-title">Cloud Infrastructure Specialist</p>
                    <div className="mentor-rating"><span>★</span>4.7</div>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span className="tag tag-primary">Cloud</span>
                  <span className="tag tag-magenta">DevOps</span>
                </div>
              </div>

            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-arrow">‹</button>
              <button className="page-dot page-dot-active">1</button>
              <button className="page-dot">2</button>
              <button className="page-dot">3</button>
              <span className="page-ellipsis">…</span>
              <button className="page-dot">8</button>
              <button className="page-arrow">›</button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentMentorDiscover;
