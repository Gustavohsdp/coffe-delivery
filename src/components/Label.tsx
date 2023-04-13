interface LabelProps {
  title: string;
}

export function Label({ title }: LabelProps) {
  return (
    <div className=" inline-block w-auto">
      <span className="font-bold text-[10px] text-yellow-900 bg-yellow-100 rounded-lg py-1 px-2">
        {title.toLocaleUpperCase()}
      </span>
    </div>
  );
}
