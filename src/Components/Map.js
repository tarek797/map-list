import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function Map() {
  const center = useMemo(() => ({ lat: 47, lng: 15 }),[])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={2.5}
      center={center}
      mapContainerClassName="map-container"
    >
      <MarkerF position={center}/>
    </GoogleMap>
  );
}

export default Map;
