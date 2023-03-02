import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import markeryellow from "../imgs/marker-32.png";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Button } from "react-bootstrap";

function Map(props) {
  const markerYellow = markeryellow;
  const center = useMemo(() => ({ lat: 47, lng: 15 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <GoogleMap
        zoom={2.5}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF position={center} />
        <MarkerF
          position={{ lat: 40, lng: 10 }}
          options={{ icon: markerYellow }}
        />
      </GoogleMap>
      <Button onClick={() => props.handleFilterByCategory("A")} className="m-4">
        CatA
      </Button>
      <Button
        onClick={() => props.handleFilterByCategory("B")}
        variant="secondary"
        className="m-4"
      >
        CatB
      </Button>
    </div>
  );
}

export default Map;
