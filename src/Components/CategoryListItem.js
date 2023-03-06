import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getGeocode, getLatLng } from "use-places-autocomplete";

function CategoryListItem(props) {
  async function convertAddresstoLatlng(address) {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    props.setEventPosition({ lat, lng});
  }

  const { startdate, enddate, headline, address, country, description } =
    props.entry;
  return (
    <Card className="rounded-0 p-3">
      <Card.Text>
        {startdate}/{enddate}
      </Card.Text>
      <Card.Title>{headline}</Card.Title>
      <Card.Subtitle>
        {address}-{country}
      </Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      {props.isButtonRendered && (
        <Button
          variant="light"
          size="sm"
          onClick={() => {
            props.handleSetEventLocation(props.entry);
            props.scrollToMap();
            convertAddresstoLatlng(`${address+","+country}`);
          }}
        >
          show on map
        </Button>
      )}
    </Card>
  );
}

export default CategoryListItem;
