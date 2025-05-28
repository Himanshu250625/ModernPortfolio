import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-6">Counter App</h1>
      <p className="text-3xl mb-4">{count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
