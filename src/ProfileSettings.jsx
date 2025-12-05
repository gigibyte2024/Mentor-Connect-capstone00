import React from "react";
import "./profile-settings.css";

const ProfileSettings = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">

        {/* LEFT SIDEBAR */}
        <aside className="profile-sidebar">

          {/* Avatar Upload */}
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

                {/* Hover Upload */}
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

          {/* SIDENAV */}
          <nav className="settings-nav">
            <a className="nav-item active">
              <span className="material-symbols-outlined nav-icon">person</span>
              Personal Info
            </a>
            <a className="nav-item">
              <span className="material-symbols-outlined nav-icon">code</span>
              Skills
            </a>
            <a className="nav-item">
              <span className="material-symbols-outlined nav-icon">tune</span>
              Preferences
            </a>
            <a className="nav-item">
              <span className="material-symbols-outlined nav-icon">lock</span>
              Privacy
            </a>
          </nav>

        </aside>

        {/* RIGHT CONTENT */}
        <main className="profile-main">

          {/* Personal Info */}
          <div className="info-card">
            <div className="info-header">
              <h2 className="info-title">Personal Info</h2>
            </div>

            {/* FORM FIELDS */}
            <div className="info-grid">

              <div className="input-group">
                <label>Full Name</label>
                <input
                  className="input-field"
                  placeholder="Jane 'Glitch' Doe"
                  defaultValue="Alex Ryder"
                />
              </div>

              <div className="input-group">
                <label>Username</label>
                <input
                  className="input-field"
                  placeholder="@username"
                  defaultValue="@alex_ryder"
                />
              </div>

              <div className="input-group full">
                <label>Domain</label>
                <input
                  className="input-field"
                  placeholder="e.g., Quantum Computing"
                  defaultValue="Cybersecurity & AI Ethics"
                />
              </div>

              <div className="input-group full">
                <label>Bio</label>
                <textarea
                  className="input-area"
                  defaultValue={
                    "Net-runner navigating the digital frontier. Specializing in securing the Gibson and mentoring the next generation of code-slingers. Let's connect and build a better-encrypted tomorrow."
                  }
                ></textarea>
              </div>

            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="actions-box">
            <button className="discard-btn">Discard</button>
            <button className="save-btn">Save Changes</button>
          </div>

          {/* DANGER ZONE */}
          <div className="danger-box">
            <div>
              <h3 className="danger-title">Danger Zone</h3>
              <p className="danger-text">
                Deleting your account is irreversible. All your data, projects,
                and connections will be permanently wiped. Proceed with caution.
              </p>
            </div>

            <button className="delete-btn">Delete Account</button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ProfileSettings;
