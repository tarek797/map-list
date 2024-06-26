import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import convertAddresstoLatLng from "../utils/convertAddresstoLatLng";

function CategoryListItem(props) {
  const { startdate, enddate, headline, address, country, description } =
    props.entry;
  return (
    <Card className="rounded-0 p-2 card-item">
      <Card.Text
        style={{ fontStyle: "italic", fontSize: "12px", margin: "1px 0" }}
      >
        {startdate}-{enddate}
      </Card.Text>
      <Card.Title style={{ fontSize: "14px", margin: "1px 0" }}>
        {headline}
      </Card.Title>
      <Card.Subtitle style={{ fontSize: "12px", margin: "1px 0" }}>
        {address}-{country}
      </Card.Subtitle>
      <Card.Text style={{ fontSize: "12px", margin: "Auto 0 0 0" }}>
        {description}
      </Card.Text>
      {props.isButtonRendered && (
        <Button
          style={{ fontSize: "12px", margin: "3px 0 0 0" }}
          variant="light"
          size="sm"
          onClick={() => {
            if (props.isMobile) props.setIsActive(true);
            props.setInfoWindowData(props.entry);
            props.scrollToMap();
            convertAddresstoLatLng(`${address + "," + country}`).then(
              ({ lat, lng }) => {
                props.setInfoWindowPosition({ lat, lng });
                props.setMapCenter({ lat, lng });
                props.setMapZoom(4);

                //props.mapRef.current.panTo({lat, lng});
              }
            );
          }}
        >
          show on map
        </Button>
      )}
    </Card>
  );
}

export default CategoryListItem;
