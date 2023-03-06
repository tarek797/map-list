import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import blueMarker from "../imgs/blue-marker-32.png";
import yellowMarker from "../imgs/yellow-marker-32.png";
import orangeMarker from "../imgs/orange-marker-32.png";
import Entry from "./CategoryListItem";
import SearchBar from "./SearchBar";

function Map(props) {
  const [selected, setSelected] = useState(null);
  const center = useMemo(() => ({ lat: 47, lng: 15 }), []);
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded, url } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });


  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div ref={props.mapRef}>
      <GoogleMap
        zoom={2.5}
        center={center}
        mapContainerClassName="map-container"
        options={{ disableDefaultUI: false }}
      >

        {selected && (
          <MarkerF position={selected} options={{ icon: orangeMarker }} />
        )}

        {props.eventLocation.address && props.eventPosition && (
          <InfoWindowF
            position={props.eventPosition }
            onCloseClick={() => {
              props.handleSetEventLocation("");
            }}
          >
            <Entry entry={props.eventLocation} isButtonRendered={false} />
          </InfoWindowF>
        )}
        {props.eventPosition && <MarkerF position={props.eventPosition} />}

      </GoogleMap>
      <SearchBar
        handleFilterByCategory={props.handleFilterByCategory}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Map;
