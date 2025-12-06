import React, { useState } from "react";
import AddResourceModal from "./AddResourceModal";
import Toast from "./Toast";
import "./MentorResources.css";

const MentorResources = () => {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSave = (newResource) => {
    setResources((prev) => [...prev, newResource]);
    setShowModal(false);
    setToast(true);

    setTimeout(() => setToast(false), 3000);
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

          {/* DROPDOWN */}
          {openDropdown && (
            <div className="dropdown">
              <button className="dropdown-item">View Resources</button>

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

      {/* MAIN CONTENT */}
      <main className="main">
        <h1 className="page-title">Resource Management</h1>

        {/* When no resources */}
        {resources.length === 0 && (
          <p className="empty-text">No resources yet. Add one!</p>
        )}

        {/* Resource Grid */}
        <div className="resource-grid">
          {resources.map((res, idx) => (
            <div key={idx} className="resource-card">
              <div className="card-header">
                <div>
                  <h3 className="res-title">{res.title}</h3>
                  <p className="res-desc">{res.description}</p>
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
