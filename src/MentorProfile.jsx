import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./api/axiosInstance";
import "./mentor-profile.css";

const MentorProfile = () => {
  const { id } = useParams(); // Get mentor ID from URL

  const [mentor, setMentor] = useState(null);

  // Fetch mentor details
  const fetchMentor = async () => {
    try {
      const res = await API.get(`/mentors/${id}`);
      setMentor(res.data);
    } catch (err) {
      console.error("Mentor fetch error:", err);
    }
  };

  useEffect(() => {
    fetchMentor();
  }, [id]);

  if (!mentor) return <p className="loading-text">Loading mentor...</p>;

  // ⭐ BUTTON: TEST UPDATE MENTOR
  const handleTestUpdate = async () => {
    try {
      const res = await API.put("/mentors/me", {
        skills: mentor.skills + ", Updated",
        experience: mentor.experience + " (updated)"
      });

      alert("Mentor Updated Successfully!");
      console.log("UPDATE RESPONSE:", res.data);

      fetchMentor(); // Refresh mentor data
    } catch (err) {
      console.error("Update Error:", err);
      alert("Failed to update mentor");
    }
  };

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
              backgroundImage: `url(${mentor.avatarUrl || ""})`,
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
                  backgroundImage: `url(${mentor.avatarUrl || ""})`,
                }}
              ></div>
            </div>

            <p className="mp-name">{mentor.name}</p>
            <p className="mp-role">{mentor.experience || "Mentor"}</p>
          </div>

          {/* BIO */}
          <div className="mp-card">
            <h3>Bio</h3>
            <p>{mentor.bio || "No bio provided."}</p>
          </div>

          {/* SKILLS */}
          <div className="mp-card">
            <h3>Skills</h3>
            <div className="mp-skills">
              {(mentor.skills || "AI, ML")
                .split(",")
                .map((skill, index) => (
                  <span className="mp-skill" key={index}>
                    {skill.trim()}
                  </span>
                ))}
            </div>
          </div>

          {/* ⭐ TEST UPDATE BUTTON */}
          <button
            onClick={handleTestUpdate}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
              background: "#4caf50",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            🔄 Test Update Mentor (CRUD)
          </button>

        </div>

        {/* RIGHT COLUMN */}
        <div className="mp-right-col">
          {/* CTA */}
          <div className="mp-cta-row">
            <button className="mp-primary">Request Mentorship</button>
            <button className="mp-secondary">Start Chat</button>
          </div>

          {/* EXPERIENCE */}
          <div className="mp-card">
            <h3>Experience</h3>
            <p>{mentor.experience || "Experience not added yet."}</p>
          </div>

          {/* REVIEWS */}
          <div className="mp-card">
            <h3>Reviews</h3>
            <p>No reviews yet.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorProfile;
