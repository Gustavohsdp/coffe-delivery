import { CreditCard } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface PaymentMethodSelectProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  selected?: boolean;
}

export function PaymentMethodSelect({
  title,
  selected = false,
  ...props
}: PaymentMethodSelectProps) {
  return (
    <button
      className={`bg-brown-300 ${
        !selected && "hover:bg-brown-400"
      }  rounded-md h-14 min-w-[178px] font-normal text-brown-700 text-xs flex flex-row items-center gap-3 justify-center ${
        selected && " border-[1px] border-solid border-purple-600"
      }`}
      {...props}
    >
      <CreditCard size={16} className="text-purple-400" />
      {title}
    </button>
  );
}
