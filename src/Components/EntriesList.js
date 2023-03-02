import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Entry from "./Entry";

function EntriesList(props) {
  return (
    <Container >
      <Row>
        
          {props.EntriesData.map((entry) => {
            return<Col sm={props.customWidth}> <Entry entry={entry} key={entry.zip} /></Col>;
          })}
        
      </Row>
    </Container>
  );
}

export default EntriesList;
