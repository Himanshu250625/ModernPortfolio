import React, { useState } from "react";

const Mytodo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) return;
    setTasks((prev)=>console.log(prev))

  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          value={input}
          onChange={handleSubmit}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[80%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
          Add
        </button>
      </form>
    </div>
  );
};

export default Mytodo;
