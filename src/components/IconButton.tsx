import { ShoppingCart } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function IconButton({ ...props }: IconButtonProps) {
  return (
    <button
      className="bg-purple-900 hover:bg-purple-400 flex items-center justify-center rounded-md w-[38px] h-[38px]"
      {...props}
    >
      <ShoppingCart size={22} color="white" fill="white" />
    </button>
  );
}
