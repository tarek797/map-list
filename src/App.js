import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Components/Map";
import importedEventsData from "./TestData.json";
import { useEffect, useRef, useState } from "react";
import CategoryList from "./Components/CategoryList";
import { useMediaQuery } from "@material-ui/core";
import filterByCategory from "./utils/filterByCategory";


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
    return filterByCategory(
      category,
      isFiltered,
      setEventsData,
      setIsFiltered,
      importedEventsData
    );
  }

  return (
    <div className="App">
      <Map
        {...{
          filterByCategoryHandler,
          infoWindowData,
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
              eventsData={eventsData.filter((entry) => entry.category === "A")}
              {...{
                setInfoWindowData,
                setInfoWindowPosition,
                mapRef,
                scrollToMap,
                setMapCenter,
                setMapZoom,
              }}
            />
          </Col>
          <Col lg={3} md={3} sm={12}>
            <CategoryList
              category="CatB"
              eventsData={eventsData.filter((entry) => entry.category === "B")}
              {...{
                setInfoWindowData,
                setInfoWindowPosition,
                mapRef,
                scrollToMap,
                setMapCenter,
                setMapZoom,
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
