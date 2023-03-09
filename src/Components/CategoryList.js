import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CategoryListItem from "./CategoryListItem";

function CategoryList(props) {
  const {
    eventsData,
    setInfoWindowData,
    setInfoWindowPosition,
    scrollToMap,
    setMapCenter,
    setMapZoom,
  } = props;
  return (
    <Container style={{ maxWidth: "370px" }}>
      <Row>
        <Card
          sm={12}
          className=" block-example border border-dark rounded-0 p-3 text-center"
        >
          {props.category}
        </Card>
      </Row>
      <Row>
        {eventsData &&
          eventsData.map((entry) => {
            return (
              <Col className="p-0 mt-4" key={entry.zip}>
                <CategoryListItem
                  entry={entry}
                  isButtonRendered={true}
                  {...{
                    setInfoWindowData,
                    setInfoWindowPosition,
                    scrollToMap,
                    setMapCenter,
                    setMapZoom,
                  }}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default CategoryList;
