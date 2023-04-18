import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isBlocked?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  isBlocked = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <>
      {isLoading ? (
        <button
          disabled
          className={`bg-yellow-100 rounded-md py-3 px-2 min-w-[132px] w-full font-bold text-white text-sm flex items-center justify-center`}
          {...props}
        >
          <div className="w-6 h-6 border-4 border-yellow-900 rounded-full animate-spin"></div>
        </button>
      ) : (
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
      )}
    </>
  );
}
