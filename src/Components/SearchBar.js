import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import AutoCompleteAdressInputField from "./AutoCompleteAdressInputField";

function SearchBar(props) {
  return (
    <Navbar variant="secondary" bg="secondary">
      <AutoCompleteAdressInputField setSelected={props.setSelected}/>
      <Button onClick={() => props.handleFilterByCategory("A")} className="m-1">
        CatA
      </Button>
      <Button
        onClick={() => props.handleFilterByCategory("B")}
        variant="light"
        className="m-1"
      >
        CatB
      </Button>
    </Navbar>
  );
}

export default SearchBar;
