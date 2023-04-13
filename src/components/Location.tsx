import { MapPin } from "lucide-react";

interface LocationProps {
  city: string;
  state: string;
}

export function Location({ city, state }: LocationProps) {
  return (
    <div className="h-10 bg-purple-100 rounded-md p-2 flex flex-row gap-2 items-center">
      <MapPin size={22} color="#8047F8" />
      <p className="font-medium text-sm text-purple-900 inline-block ">
        {city}
      </p>
      <span className="font-medium text-sm text-purple-900">{state}</span>
    </div>
  );
}
