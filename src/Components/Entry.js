import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Entry(props) {
  console.log(props.entry);
  return (
    <Card className="rounded-0 p-3">
      <Card.Text>
        {props.entry.startdate}/{props.entry.enddate}
      </Card.Text>
      <Card.Title>{props.entry.headline}</Card.Title>
      <Card.Subtitle>
        {props.entry.address}-{props.entry.country}
      </Card.Subtitle>
      <Card.Text >{props.entry.description}</Card.Text>
      <Button variant="light" size="sm">show on map</Button>
    </Card>
  );
}

export default Entry;
