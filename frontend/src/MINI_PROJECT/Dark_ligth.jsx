import React, { useState } from 'react';

function Dark_ligth() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode
          ? 'bg-black text-white h-screen flex flex-col items-center justify-center'
          : 'bg-white text-black h-screen flex flex-col items-center justify-center'
      }
    >
      <h1 className="text-3xl font-bold mb-4">
        {darkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
      </h1>
      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default Dark_ligth;
