import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import blueMarkerIcon from "../imgs/blue-marker-32.png";
import yellowMarkerIcon from "../imgs/yellow-marker-32.png";
import orangeMarkerIcon from "../imgs/orange-marker-32.png";
import Entry from "./CategoryListItem";
import SearchBar from "./SearchBar";
import CategoryListItem from "./CategoryListItem";

function Map(props) {
  const [searchedLocation, setSearchedLocation] = useState(null);
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
        {searchedLocation && (
          <MarkerF position={searchedLocation} options={{ icon: orangeMarkerIcon }} />
        )}

        {props.infoWindowData.address && props.infoWindowPosition.lat && (
          <InfoWindowF
            position={props.infoWindowPosition}
            onCloseClick={() => {
              props.setInfoWindowData("");
            }}
          >
            <CategoryListItem entry={props.infoWindowData} isButtonRendered={false} />
          </InfoWindowF>
        )}
      </GoogleMap>
      <SearchBar
        filterByCategoryHandler={props.filterByCategoryHandler}
        setSearchedLocation={setSearchedLocation}
      />
    </div>
  );
}

export default Map;
