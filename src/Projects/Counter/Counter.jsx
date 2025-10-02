import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col justify-center items-center gap-10">
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
        Counter
      </h1>
      <div className="bg-white/20 backdrop-blur-lg w-80 flex justify-between items-center p-6 rounded-2xl shadow-2xl text-3xl font-semibold text-white">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white px-5 py-2 rounded-xl shadow-lg"
        >
          -
        </button>
        <span className="text-4xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all text-white px-5 py-2 rounded-xl shadow-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
