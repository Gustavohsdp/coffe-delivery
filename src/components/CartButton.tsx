import { ShoppingCart } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quantityOfItems?: number;
}

export function CartButton({ quantityOfItems, ...props }: IconButtonProps) {
  return (
    <button
      className="bg-yellow-100 flex items-center justify-center rounded-md w-[38px] h-[38px] relative"
      {...props}
    >
      <ShoppingCart size={22} color="#C47F17" fill="#C47F17" />

      {quantityOfItems && (
        <div className="bg-yellow-900 rounded-full w-5 h-5  top-[-8px] right-[-8px] absolute flex items-center justify-center">
          <span className="text-xs font-bold text-white">{3}</span>
        </div>
      )}
    </button>
  );
}
