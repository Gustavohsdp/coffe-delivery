"use client";

import { Product } from "@/@types/product";
import { useProducts } from "@/hooks/useProducts";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface CounterProps {
  product: Product;
}

export function Counter({ product }: CounterProps) {
  const [counter, setCounter] = useState(product.quantity);
  const { addProductToCart, removeProductToCart } = useProducts();

  function handleDecreaseCount() {
    if (counter >= 1) {
      setCounter((prevState) => prevState - 1);
      removeProductToCart(product);
    }
  }

  function handleIncreaseCount() {
    setCounter((prevState) => prevState + 1);
    addProductToCart(product);
  }

  return (
    <div className="bg-brown-400 w-[72px] h-8 rounded-md gap-1 flex justify-center items-center">
      <button
        type="button"
        disabled={counter === 0}
        onClick={handleDecreaseCount}
        className={`${
          counter === 0
            ? "text-gray-400 cursor-not-allowed"
            : "text-purple-400 hover:text-purple-900"
        } `}
      >
        <Minus size={14} />
      </button>
      <span className="text-base text-center font-normal text-brown-900">
        {counter}
      </span>
      <button
        type="button"
        onClick={handleIncreaseCount}
        className="text-purple-400 hover:text-purple-900"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
