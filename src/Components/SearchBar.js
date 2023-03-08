import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import AutoCompleteAdressInputField from "./AutoCompleteAddressInputField";

function SearchBar(props) {
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
      <Button onClick={handleGetLocationClick} className="m-3">
        🌐
      </Button>

      <Button
        onClick={() => props.filterByCategoryHandler("A")}
        className="m-2"
      >
        CatA
      </Button>
      <Button
        onClick={() => props.filterByCategoryHandler("B")}
        variant="light"
        className="m-2"
      >
        CatB
      </Button>
    </Navbar>
  );
}

export default SearchBar;
