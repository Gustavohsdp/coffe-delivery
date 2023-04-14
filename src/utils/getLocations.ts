interface LocationData {
  city: string;
  state: string;
}

export async function getLocation(): Promise<LocationData> {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported");
  }

  const position = await new Promise<any>((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );

  const { latitude, longitude } = position.coords;
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
  const data = await response.json();
  
  return {
    city: data.address.city ?? data.address.town,
    state: `${data.address.state.split(" ")[0].split("")[0]}${data.address.state.split(" ")[1].split("")[0]}`,
  };
}
