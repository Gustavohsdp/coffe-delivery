import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button
      className="bg-yellow-400 hover:bg-yellow-900 rounded-md py-3 px-2 min-w-[132px] font-bold text-white text-sm"
      {...props}
    >
      {title.toUpperCase()}
    </button>
  );
}
