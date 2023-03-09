import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import AutoCompleteAdressInputField from "./AutoCompleteAddressInputField";
import { useMediaQuery } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";

function SearchBar(props) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleGetLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      props.setMapZoom(15);
      props.setMapCenter({ lat: latitude, lng: longitude });
    });
  };
  return (
    <Navbar
      variant="secondary"
      bg="secondary"
      className="justify-content-center"
    >
      <AutoCompleteAdressInputField
        setSearchedLocation={props.setSearchedLocation}
        setMapCenter={props.setMapCenter}
        setMapZoom={props.setMapZoom}
      />
      {isMobile && (
        <Button
          onClick={handleGetLocationClick}
          className="m-1"
          variant="light"
        >
          <MyLocationIcon />
        </Button>
      )}

      <Button
        onClick={() => props.filterByCategoryHandler("A")}
        className="ml-1"
      >
        CatA
      </Button>
      <Button
        onClick={() => props.filterByCategoryHandler("B")}
        variant="light"
        className="mr-1"
      >
        CatB
      </Button>
    </Navbar>
  );
}

export default SearchBar;
