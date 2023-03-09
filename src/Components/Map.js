import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import blueMarkerIcon from "../imgs/blue-marker-32.png";
import yellowMarkerIcon from "../imgs/yellow-marker-32.png";
import orangeMarkerIcon from "../imgs/orange-marker-32.png";
import SearchBar from "./SearchBar";
import CategoryListItem from "./CategoryListItem";
import { Button } from "react-bootstrap";

function Map(props) {
  const [searchedLocation, setSearchedLocation] = useState(null);
  const center = useMemo(() => props.mapCenter, [props.mapCenter]);
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });


  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <GoogleMap
        ref={props.mapRef}
        zoom={props.mapZoom}
        center={center}
        mapContainerClassName="map-container"
        options={{ disableDefaultUI: !props.isActiveMap, mapTypeId: "satellite" }}
      >
        {searchedLocation && (
          <MarkerF
            position={searchedLocation}
            options={{ icon: orangeMarkerIcon }}
          />
        )}
        {props.infoWindowData.address && props.infoWindowPosition.lat && (
          <OverlayViewF
            position={props.infoWindowPosition}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({
              x: -width / 2,
              y: -height / 2,
            })}
          >
            <div
              style={{
                background: "transparent",
                boxShadow: "none",
                padding: "10px",
              }}
            >
              <CategoryListItem
                entry={props.infoWindowData}
                isButtonRendered={false}
              />
            </div>
          </OverlayViewF>
        )}

        {props.isMobile&&!props.isActiveMap&&<OverlayViewF
          position={{ lat: center.lat, lng: center.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: -width / 2,
            y: -height / 2,
          })}
        >
          <Button onClick={()=>props.setIsActiveMap(true)}>click to activate</Button>
        </OverlayViewF>}
      </GoogleMap>
      <SearchBar
        filterByCategoryHandler={props.filterByCategoryHandler}
        setSearchedLocation={setSearchedLocation}
        setMapCenter={props.setMapCenter}
        setMapZoom={props.setMapZoom}
      />
    </div>
  );
}

export default Map;
