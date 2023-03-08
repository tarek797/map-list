import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Components/Map";
import EntriesData from "./TestData.json";
import { useRef, useState } from "react";
import CategoryList from "./Components/CategoryList";
import { useBootstrapMinBreakpoint } from "react-bootstrap/esm/ThemeProvider";

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [mapZoom, setMapZoom] = useState(2.5);
  const [entries, setEntries] = useState(EntriesData);
  const [isAFiltered, setIsAFiltered] = useState(false);
  const [isBFiltered, setIsBFiltered] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState({});
  const [infoWindowPosition, setInfoWindowPosition] = useState({});

  const mapRef = useRef(null);

  function scrollToMap() {
    if (mapRef.current) {
      const mapDiv = mapRef.current.mapRef;
      mapDiv.scrollIntoView({ behavior: "smooth" });
    }
  }
  function filterByCategoryHandler(category) {
    if (!isAFiltered && category === "A") {
      setEntries(EntriesData);
      setEntries((prev) => prev.filter((entry) => entry.category === category));
      setIsAFiltered(true);
    } else if (isAFiltered && category === "A") {
      setEntries(EntriesData);
      setIsAFiltered(false);
    } else if (!isBFiltered && category === "B") {
      setEntries(EntriesData);
      setEntries((prev) => prev.filter((entry) => entry.category === category));
      setIsBFiltered(true);
    } else if (isBFiltered && category === "B") {
      setEntries(EntriesData);
      setIsBFiltered(false);
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
        }}
      />
      <Container className="mt-4" style={{ maxWidth: "700px" }}>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <CategoryList
              category="CatA"
              cardWidth={6}
              EntriesData={entries.filter((entry) => entry.category === "A")}
              {...{
                setInfoWindowData,
                setInfoWindowPosition,
                scrollToMap,
                mapRef,
                setMapCenter,
                setMapZoom,
              }}
            />
          </Col>
          <Col lg={3} md={3} sm={12} >
            <CategoryList
              category="CatB"
              cardWidth={12}
              EntriesData={entries.filter((entry) => entry.category === "B")}
              {...{
                setInfoWindowData,
                setInfoWindowPosition,
                scrollToMap,
                mapRef,
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
