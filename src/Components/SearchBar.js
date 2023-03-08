import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import AutoCompleteAdressInputField from "./AutoCompleteAddressInputField";

function SearchBar(props) {
  return (
    <Navbar variant="secondary" bg="secondary" className="justify-content-center">
      <AutoCompleteAdressInputField
        setSearchedLocation={props.setSearchedLocation}
        setMapCenter={props.setMapCenter}
        setMapZoom={props.setMapZoom}
      />
      <Button
        onClick={() => props.filterByCategoryHandler("A")}
        className="m-3"
      >
        CatA
      </Button>
      <Button
        onClick={() => props.filterByCategoryHandler("B")}
        variant="light"
        className="m-3"
      >
        CatB
      </Button>
    </Navbar>
  );
}

export default SearchBar;
