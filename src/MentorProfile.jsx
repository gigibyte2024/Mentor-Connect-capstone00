import React from "react";
import "./mentor-profile.css";

const MentorProfile = () => {
  return (
    <div className="mentor-profile-wrapper">

      {/* TOP NAV */}
      <header className="mp-topbar">
        <div className="mp-left">
          <div className="mp-logo"></div>
          <h2 className="mp-title">Commit Connect</h2>
        </div>

        <nav className="mp-nav">
          <a>Dashboard</a>
          <a className="active">Mentors</a>
          <a>Leaderboard</a>
          <a>Profile</a>
        </nav>

        <div className="mp-right">
          <button className="mp-icon-btn">🔔</button>
          <button className="mp-icon-btn">⚙️</button>

          <div
            className="mp-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChzlf7qq51YiW1gYT0paVTSAJ862ZlhVnQeEyGR5pazSQ10HYzyk_EZYYZyVMfEM92Y7dDKuLr7DnYlVpLHQpRF8KIQ8dekXTsIFE99j-NUNJtLlHgQa13cC50zrsXaRbhgEr5hcFVgzJ4M3pQxk9t-YBre9d9EYoxS6DYimp7OisprwA6FIwAc4ph3uCJn3-ZCvhnBoHDHCBlRNWtcSr1lH7KmjviPhQYN7Q2NlJkl2HUjs9CFA8Xyhy0kvtUKFOTX14NIGIYwxg')",
            }}
          ></div>
        </div>
      </header>

      {/* MAIN GRID */}
      <main className="mp-container">

        {/* LEFT COLUMN */}
        <div className="mp-left-col">

          {/* PROFILE HEADER */}
          <div className="mp-card center">
            <div className="mp-avatar-large-wrapper">
              <div
                className="mp-avatar-large"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqAGkUV7K3NG7YVtLOS05PesUA62EH81xxXUG5uUkrm4nCrEO-T7L6hNaQltDNuaEgPRDjSVmle74cC5_W2T2A8ZmX6D2KM7eRUVA32vT7KvZOhIksBM7uh5DGSaRPEtQyERiO4LEbLxzXCGvu5vArY5eW_eQlyC6dLKGEsuI7o8d05dsM061X9Ke3UE_YTUWDhxma0dW__zMRAGxvAHXbQ2I1-RaHNbD2pSndDmmMI39cKHBbOOeZWoRARD5QbmU8k_QzC7mb7FU')",
                }}
              ></div>
            </div>

            <p className="mp-name">Jax "Glitch" Valerius</p>
            <p className="mp-role">
              Principal AI Architect at Cybersystems Inc.
            </p>
          </div>

          {/* BIO */}
          <div className="mp-card">
            <h3>Bio</h3>
            <p>
              A brief but impactful bio outlining my expertise in neural
              architecture and quantum computing. My mission is to decode the
              digital consciousness and empower the next generation of builders.
            </p>
          </div>

          {/* STATS */}
          <div className="mp-card">
            <h3>Stats</h3>
            <div className="mp-stats-row">

              <div className="mp-stat-box">
                <p>Total Sessions</p>
                <h2>248</h2>
              </div>

              <div className="mp-stat-box">
                <p>Years Experience</p>
                <h2>12</h2>
              </div>

              <div className="mp-stat-box">
                <p>Avg Rating</p>
                <h2>4.9/5</h2>
              </div>

            </div>
          </div>

          {/* SKILLS */}
          <div className="mp-card">
            <h3>Skills</h3>
            <div className="mp-skills">
              <span className="mp-skill">AI</span>
              <span className="mp-skill">Cybernetics</span>
              <span className="mp-skill">Neural Networks</span>
              <span className="mp-skill">Quantum Computing</span>
              <span className="mp-skill">Machine Learning</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mp-right-col">

          {/* CTA BUTTONS */}
          <div className="mp-cta-row">
            <button className="mp-primary">Request Mentorship</button>
            <button className="mp-secondary">Start Chat</button>
          </div>

          {/* EXPERIENCE TIMELINE */}
          <div className="mp-card">
            <h3>Experience</h3>

            <div className="mp-timeline">

              <div className="mp-timeline-item">
                <div className="mp-dot"></div>
                <p className="mp-job-title">Principal AI Architect</p>
                <p className="mp-job-company">Cybersystems Inc.</p>
                <p className="mp-job-time">2022 - Present</p>
              </div>

              <div className="mp-timeline-item">
                <div className="mp-dot"></div>
                <p className="mp-job-title">Senior ML Engineer</p>
                <p className="mp-job-company">Nexus Dynamics</p>
                <p className="mp-job-time">2018 - 2022</p>
              </div>

              <div className="mp-timeline-item">
                <div className="mp-dot"></div>
                <p className="mp-job-title">Software Engineer</p>
                <p className="mp-job-company">OmniCorp</p>
                <p className="mp-job-time">2015 - 2018</p>
              </div>

            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="mp-card">
            <h3>Availability</h3>

            <div className="mp-calendar">
              <span>Mon</span><span>Tue</span><span>Wed</span>
              <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>

              <div className="mp-day">28</div>
              <div className="mp-day">29</div>
              <div className="mp-day active">30</div>
              <div className="mp-day active">31</div>
              <div className="mp-day">1</div>
              <div className="mp-day">2</div>
              <div className="mp-day">3</div>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="mp-card">
            <h3>Reviews</h3>

            <div className="mp-review">
              <div className="mp-review-header">
                <div
                  className="mp-review-avatar"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxAx5YkkwK27TBslTLF2x6rQUKm_0IhvhetOXxQsqm_qsJge80XB0KIRmcWFxk9Kg8QxFkU9-Qpvlu_lI95DNJwMkbI1kUAnwPbZmjwPZd2hD0LrEJ3TM22i1Fks6zb3-P88hQ4m59WJZEscTGGzfE24aJgUy6Zk-thgFC11K33rnFCEV0vqWYuhPiqcbcW0bZYlw_Q9EXk7D0JbDeiCFNIp88kh7kTKDbfr8qig6ANB4m9ZKQR-FeCjGhz260JqHK9lCfPIIXU1Y')",
                  }}
                ></div>

                <p className="mp-review-name">NeoRider_77</p>

                <span className="mp-stars">⭐ 5.0</span>
              </div>

              <p className="mp-review-text">
                Jax completely changed my perspective on neural network design.
                Invaluable sessions!
              </p>
            </div>

            {/* Review 2 */}
            <div className="mp-review">
              <div className="mp-review-header">
                <div
                  className="mp-review-avatar"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9QBMVchlnpvLmp24LLdSAMnn0ege2olc6Us2ZRaWkm4UwhrxU63-1n_k9MVDwvXP5MbjeGY-ivU4CvNmHSYia9RdPZkGcj8s4P0nOhN-npQzh_Ue41xmtgwbuEoG_wWiYuoUHwkM69jt7hyH8IQlGrnmYCkazQoGXks06yHStHwymb4FDwb-gAT2hR7N0os-AkdN6kxpZxcj6F8val002JeNqkRV9TLVyRK7xYpymq6DOSEK2JgU_FG-L8RRATMrXMEWQRJNV29o')",
                  }}
                ></div>

                <p className="mp-review-name">CodeWitch_21</p>

                <span className="mp-stars">⭐ 4.8</span>
              </div>

              <p className="mp-review-text">
                An amazing mentor who simplifies complex topics. Highly recommend!
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorProfile;
