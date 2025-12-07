// src/ProfileSettings.jsx
import React, { useEffect, useState } from "react";
import "./profile-settings.css";
import API from "./api/axiosInstance"; // axios with token

const ProfileSettings = () => {
  const [loading, setLoading] = useState(true);
  const [originalUser, setOriginalUser] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
    domain: "",
  });

  // --------------------------
  // 1️⃣ Fetch logged-in user
  // --------------------------
  const fetchUser = async () => {
    try {
      const res = await API.get("/users/me");

      const userData = {
        name: res.data.name,
        email: res.data.email,
        role: res.data.role,
        bio: res.data.bio || "",
        domain: res.data.domain || "",
      };

      setUser(userData);
      setOriginalUser(userData); // store untouched copy
      setLoading(false);
    } catch (err) {
      console.error("Fetch user error:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // --------------------------
  // 2️⃣ Update user profile
  // --------------------------
  const handleSave = async () => {
    try {
      await API.put("/users/update", user);
      alert("Profile updated successfully!");
      setOriginalUser(user); // update saved copy
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile");
    }
  };

  // --------------------------
  // 3️⃣ Discard → revert to original saved data
  // --------------------------
  const handleDiscard = () => {
    if (!originalUser) return;
    setUser(originalUser);
  };

  // --------------------------
  // 4️⃣ Delete Account
  // --------------------------
  const deleteAccount = async () => {
    if (!window.confirm("Are you sure? This cannot be undone.")) return;

    try {
      await API.delete("/users/delete");
      localStorage.removeItem("token");
      alert("Account deleted");
      window.location.href = "/";
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete account");
    }
  };

  if (loading) return <p className="loading-text">Loading profile...</p>;

  return (
    <div className="profile-wrapper">
      <div className="profile-container">

        {/* LEFT SIDEBAR */}
        <aside className="profile-sidebar">
          <div className="avatar-box">
            <div className="avatar-wrapper">
              <div className="avatar-frame">
                <div
                  className="avatar-img"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGBbxIxzRgr4lUQKvyTPgtIuB5UHHX-hvZNhJ4XrlsPiCigmR23eJFpH-D9_fVXlH-giozZFR2fdKmiwftlZkx4oWqGsev1FgKpAoDTEyNR2xMVcoGH5tZ4kbNYA0aGxs6QufJM4vmsLllSoezKKkcFU1ncSEKauafB2DNNa0Ma-vLNlhD2Vs7xfZLSAGgQKHnoYOVDge_rDD52k4iWkhuoENsIK0mwIwaTAQyXariHsbqsGbNbIHSC8YAVSiROeqjjEmjixnmqCA')",
                  }}
                ></div>

                <div className="avatar-hover">
                  <span className="material-symbols-outlined upload-icon">
                    upload
                  </span>
                  <p>Upload</p>
                </div>
              </div>

              <div className="avatar-pulse"></div>
            </div>

            <h1 className="profile-title">Cyber-Profile</h1>
            <p className="profile-sub">Edit Settings</p>
          </div>

          <nav className="settings-nav">
            <a className="nav-item active">
              <span className="material-symbols-outlined nav-icon">person</span>
              Personal Info
            </a>
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="profile-main">

          <div className="info-card">
            <div className="info-header">
              <h2 className="info-title">Personal Info</h2>
            </div>

            <div className="info-grid">

              {/* Name */}
              <div className="input-group">
                <label>Full Name</label>
                <input
                  className="input-field"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div className="input-group">
                <label>Email</label>
                <input
                  className="input-field"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              {/* Domain */}
              <div className="input-group full">
                <label>Domain</label>
                <input
                  className="input-field"
                  value={user.domain}
                  onChange={(e) => setUser({ ...user, domain: e.target.value })}
                />
              </div>

              {/* Bio */}
              <div className="input-group full">
                <label>Bio</label>
                <textarea
                  className="input-area"
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                ></textarea>
              </div>

            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="actions-box">
            <button className="discard-btn" onClick={handleDiscard}>
              Discard
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>

          {/* DANGER ZONE */}
          <div className="danger-box">
            <div>
              <h3 className="danger-title">Danger Zone</h3>
              <p className="danger-text">
                Deleting your account is irreversible.
              </p>
            </div>

            <button className="delete-btn" onClick={deleteAccount}>
              Delete Account
            </button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ProfileSettings;
