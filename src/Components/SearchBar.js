import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import AutoCompleteAdressInputField from "./AutoCompleteAddressInputField";

function SearchBar(props) {
  return (
    <Navbar variant="secondary" bg="secondary">
      <AutoCompleteAdressInputField setSearchedLocation={props.setSearchedLocation}/>
      <Button onClick={() => props.filterByCategoryHandler("A")} className="m-1">
        CatA
      </Button>
      <Button
        onClick={() => props.filterByCategoryHandler("B")}
        variant="light"
        className="m-1"
      >
        CatB
      </Button>
    </Navbar>
  );
}

export default SearchBar;
