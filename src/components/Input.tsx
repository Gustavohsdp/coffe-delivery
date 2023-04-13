import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="h-11 rounded-[4px] bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm"
      {...props}
    />
  );
}
