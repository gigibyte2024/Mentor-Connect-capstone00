import React from "react";

const Toast = () => {
  return (
    <div className="fixed top-8 right-8 bg-green-500/20 backdrop-blur-md border border-green-400 text-green-300 px-6 py-3 rounded-lg shadow-glow-green flex items-center gap-3">
      <span className="material-symbols-outlined">check_circle</span>
      <p className="font-semibold">Resource saved successfully!</p>
    </div>
  );
};

export default Toast;
