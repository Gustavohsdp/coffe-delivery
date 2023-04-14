import { PaymentMethodProps } from "@/app/checkout/page";
import { CreditCard } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface PaymentMethodSelectProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  paymentMethod: PaymentMethodProps;
  isSelected?: boolean;
  onSelect: (paymentMethod: any) => void;
}

export function PaymentMethodSelect({
  isSelected = false,
  onSelect,
  paymentMethod,
  ...props
}: PaymentMethodSelectProps) {
  return (
    <button
      type="button"
      className={`bg-brown-300 ${
        !isSelected && "hover:bg-brown-400"
      }  rounded-md h-14 min-w-[178px] font-normal text-brown-700 text-xs flex flex-row items-center gap-3 justify-center ${
        isSelected && " border-[1px] border-solid border-purple-600"
      }`}
      onClick={() => onSelect(paymentMethod)}
      {...props}
    >
      <CreditCard size={16} className="text-purple-400" />
      {paymentMethod.method.toUpperCase()}
    </button>
  );
}
