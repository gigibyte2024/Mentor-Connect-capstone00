import React, { useState } from "react";

const categories = ["Lecture Notes", "Code Snippets", "External Links", "Tutorials"];

const AddResourceModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Lecture Notes");

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSave({
      title,
      description,
      category
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1a202c]/80 backdrop-blur-lg border border-primary/30 rounded-xl p-8 w-full max-w-lg mx-4 flex flex-col gap-6 shadow-glow-cyan">

        <h2 className="text-2xl font-bold text-white">Add New Resource</h2>

        <div className="flex flex-col gap-4">

          {/* Title */}
          <label className="text-sm text-[#8ecccc]">
            Title
            <input
              className="mt-1 w-full rounded-lg bg-[#102323] border border-primary/20 text-white p-2"
              placeholder="e.g., Advanced CSS Grid Techniques"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          {/* Description */}
          <label className="text-sm text-[#8ecccc]">
            Description
            <textarea
              className="mt-1 w-full rounded-lg bg-[#102323] border border-primary/20 text-white p-2"
              rows="3"
              placeholder="A short summary of the resource..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8ecccc]">Category</p>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    category === cat
                      ? "border-primary text-primary bg-primary/20"
                      : "border-white/20 text-white hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-2">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg text-[#102323] bg-primary font-bold hover:shadow-glow-cyan transition-shadow"
          >
            Save Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddResourceModal;
