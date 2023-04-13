import { Trash2 } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function RemoveButton({ title, ...props }: RemoveButtonProps) {
  return (
    <button
      className="bg-brown-300 hover:bg-brown-400 rounded-md h-8 min-w-[92px] font-normal text-brown-700 text-xs flex flex-row items-center gap-1 justify-center"
      {...props}
    >
      <Trash2 size={16} className="text-purple-400" />
      {title.toUpperCase()}
    </button>
  );
}
