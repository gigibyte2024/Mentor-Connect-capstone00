import React, { useState } from "react";
import "./MentorResources.css";

const AddResourceModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return alert("Title is required");

    onSave({
      title,
      desc: description,
      category,
      fileUrl: "none" // Optional since you are not uploading files
    });

    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Add New Resource</h2>

        <label className="modal-label">Title</label>
        <input
          type="text"
          className="modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="modal-label">Description</label>
        <textarea
          className="modal-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="modal-label">Category</label>
        <input
          type="text"
          className="modal-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddResourceModal;
