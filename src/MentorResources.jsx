import React, { useState } from "react";
import AddResourceModal from "./AddResourceModal";
import Toast from "./Toast";

const MentorResources = () => {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSave = (newResource) => {
    setResources((prev) => [...prev, newResource]); // save resource
    setShowModal(false); // close modal
    setToast(true);      // show toast

    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-background-dark text-gray-200">

      {/* SIDEBAR LEFT */}
      <aside className="w-64 p-4 bg-[#102323] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4">Resources</h2>

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-primary text-[#102323] py-2 rounded-lg font-bold mb-3"
          >
            ➕ Add Resource
          </button>

          <div className="flex flex-col gap-2">
            <button className="px-3 py-2 rounded-lg bg-primary/10 text-primary">
              View Resources
            </button>
          </div>
        </div>

        <button className="w-full bg-primary py-2 text-[#102323] rounded-lg font-bold">
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-black mb-6">Resource Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {resources.length === 0 && (
            <p className="text-gray-400">No resources yet. Add one!</p>
          )}

          {resources.map((res, index) => (
            <div
              key={index}
              className="group relative bg-[#214a4a] rounded-xl border border-transparent hover:border-primary/50 p-5 flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-lg">{res.title}</h3>
                  <p className="text-[#8ecccc] text-sm">{res.description}</p>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">
                  description
                </span>
              </div>

              <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded-full">
                {res.category}
              </span>
            </div>
          ))}

        </div>

        {/* Floating Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-[#102323] shadow-glow-cyan hover:scale-105 transition-all"
        >
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </main>

      {/* MODAL */}
      {showModal && <AddResourceModal onClose={() => setShowModal(false)} onSave={handleSave} />}

      {/* TOAST */}
      {toast && <Toast />}
    </div>
  );
};

export default MentorResources;
