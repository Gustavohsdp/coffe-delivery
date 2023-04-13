"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleDecreaseCount() {
    setCounter((prevState) => prevState - 1);
  }

  function handleIncreaseCount() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div className="bg-brown-400 w-[72px] h-8 rounded-md gap-1 flex justify-center items-center">
      <button
        onClick={handleDecreaseCount}
        className="text-purple-400 hover:text-purple-900"
      >
        <Minus size={14} />
      </button>
      <span className="text-base text-center font-normal text-brown-900">
        {counter}
      </span>
      <button
        onClick={handleIncreaseCount}
        className="text-purple-400 hover:text-purple-900"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
