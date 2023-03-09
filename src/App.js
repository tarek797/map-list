import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Components/Map";
import importedEventsData from "./TestData.json";
import { useEffect, useRef, useState } from "react";
import CategoryList from "./Components/CategoryList";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [mapZoom, setMapZoom] = useState(2.5);
  const [eventsData, setEventsData] = useState(importedEventsData);
  const [isFiltered, setIsFiltered] = useState({ A: false, B: false });
  const [infoWindowData, setInfoWindowData] = useState({});
  const [infoWindowPosition, setInfoWindowPosition] = useState({});
  const mapRef = useRef(null);

  const [isActiveMap, setIsActiveMap] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    setIsActiveMap(!isMobile);
  }, [isMobile]);

  function scrollToMap() {
    if (mapRef.current) {
      const mapDiv = mapRef.current.mapRef;
      mapDiv.scrollIntoView({ behavior: "smooth" });
    }
  }

  function filterByCategoryHandler(category) {
    setEventsData(importedEventsData);

    if (category === "A") {
      if (!isFiltered.A) {
        setEventsData((prev) =>
          prev.filter((entry) => entry.category === category)
        );
        setIsFiltered((prev) => ({ ...prev, A: true }));
      } else {
        setIsFiltered((prev) => ({ ...prev, A: false }));
      }
    } else if (category === "B") {
      if (!isFiltered.B) {
        setEventsData((prev) =>
          prev.filter((entry) => entry.category === category)
        );
        setIsFiltered((prev) => ({ ...prev, B: true }));
      } else {
        setIsFiltered((prev) => ({ ...prev, B: false }));
      }
    }
  }

  return (
    <div className="App">
      <Map
        filterByCategoryHandler={filterByCategoryHandler}
        {...{
          infoWindowData,
          setInfoWindowData,
          mapRef,
          infoWindowPosition,
          mapCenter,
          mapZoom,
          setMapCenter,
          setMapZoom,
          isActiveMap,
          isMobile,
          setIsActiveMap,
        }}
      />
      <Container className="mt-4" style={{ maxWidth: "700px" }}>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <CategoryList
              category="CatA"
              cardWidth={6}
              eventsData={eventsData.filter((entry) => entry.category === "A")}
              {...{
                setInfoWindowData,
                setInfoWindowPosition,
                scrollToMap,
                mapRef,
                setMapCenter,
                setMapZoom,
                isMobile,
                setIsActiveMap,
              }}
            />
          </Col>
          <Col lg={3} md={3} sm={12}>
            <CategoryList
              category="CatB"
              cardWidth={12}
              eventsData={eventsData.filter((entry) => entry.category === "B")}
              {...{
                setInfoWindowData,
                setInfoWindowPosition,
                scrollToMap,
                mapRef,
                setMapCenter,
                setMapZoom,
                isMobile,
                setIsActiveMap,
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
