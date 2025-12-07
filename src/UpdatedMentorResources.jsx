import React, { useState, useEffect } from "react";
import AddResourceModal from "./AddResourceModal";
import Toast from "./Toast";
import "./MentorResources.css";

// IMPORTANT: Fix import path
import API from "./api/axiosInstance.js";

const MentorResources = () => {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  // Fetch resources
  const fetchResources = async () => {
    try {
      const res = await API.get("/resources");
      setResources(res.data); 
    } catch (err) {
      console.error("Fetch Resources Error:", err);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // Add resource
  const handleSave = async (formData) => {
    try {
      const res = await API.post("/resources", formData);

      setResources((prev) => [...prev, res.data.resource]);

      setShowModal(false);
      setToast(true);

      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      console.error("Add Resource Error:", err);
      alert("Failed to add resource");
    }
  };

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <h2
            className="sidebar-heading"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Resources ▾
          </h2>

          {openDropdown && (
            <div className="dropdown">
              <button className="dropdown-item" onClick={fetchResources}>
                View Resources
              </button>

              <button
                className="dropdown-item"
                onClick={() => setShowModal(true)}
              >
                Add Resource
              </button>
            </div>
          )}
        </div>

        <button className="logout-btn">Logout</button>
      </aside>

      {/* MAIN */}
      <main className="main">
        <h1 className="page-title">Resource Management</h1>

        {resources.length === 0 && (
          <p className="empty-text">No resources yet. Add one!</p>
        )}

        <div className="resource-grid">
          {resources.map((res) => (
            <div key={res.id} className="resource-card">
              <div className="card-header">
                <div>
                  <h3 className="res-title">{res.title}</h3>
                  <p className="res-desc">{res.desc}</p>
                </div>

                <span className="material-symbols-outlined res-icon">
                  description
                </span>
              </div>

              <span className="tag">{res.category}</span>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL */}
      {showModal && (
        <AddResourceModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {toast && <Toast />}
    </div>
  );
};

export default MentorResources;
