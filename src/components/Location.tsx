"use client";

import { getLocation } from "@/utils/getLocations";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface LocationProps {
  city: string;
  state: string;
}

export function Location() {
  const [userLocation, setUserLocation] = useState<LocationProps | null>(null);

  useEffect(() => {
    async function useLocation() {
      const location = await getLocation();

      setUserLocation(location);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLocation();
  }, []);

  return (
    <>
      {userLocation ? (
        <div className="h-10 bg-purple-100 rounded-md p-2 flex flex-row gap-2 items-center">
          <MapPin size={22} color="#8047F8" />
          <p className="font-medium text-sm text-purple-900 inline-block ">
            {userLocation?.city},
          </p>
          <span className="font-medium text-sm text-purple-900">
            {userLocation?.state}
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="h-10 w-[200px] bg-purple-100 rounded-md p-2 flex flex-row gap-2 items-center animate-pulse "></div>
        </div>
      )}
    </>
  );
}
