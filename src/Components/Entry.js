import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Entry(props) {
  console.log(props.entry);
  return (
    <Card className="rounded-0" >
      <Card.Text>
        {props.entry.startdate}/{props.entry.enddate}
      </Card.Text>
      <Card.Title>{props.entry.headline}</Card.Title>
      <Card.Subtitle>
        {props.entry.address}-{props.entry.country}
      </Card.Subtitle>
      <Card.Link href="#">{props.entry.description}</Card.Link>
      <Button>show on map</Button>
    </Card>
  );
}

export default Entry;
