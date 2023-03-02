import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Entry from "./Entry";

function EntriesList(props) {
  return (
    <Container>
      <Row>
        <Card
          sm={12}
          className=" block-example border border-dark rounded-0 p-3 text-center"
        >
          {props.cate}
        </Card>
      </Row>
      <Row>
        {props.EntriesData && props.EntriesData.map((entry) => {
          return (
            <Col className="p-0 mt-4" key={entry.zip}>
              <Entry entry={entry}  />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default EntriesList;
