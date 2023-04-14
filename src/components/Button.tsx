import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isBlocked?: boolean;
}

export function Button({ title, isBlocked = false, ...props }: ButtonProps) {
  return (
    <button
      className={`${
        isBlocked
          ? "bg-zinc-400 cursor-not-allowed"
          : "bg-yellow-400 hover:bg-yellow-900"
      } rounded-md py-3 px-2 min-w-[132px] w-full font-bold text-white text-sm`}
      {...props}
    >
      {title.toUpperCase()}
    </button>
  );
}
