import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Components/Map";
import EntriesData from "./TestData.json";
import { useRef, useState } from "react";
import CategoryList from "./Components/CategoryList";

function App() {
  const [entries, setEntries] = useState(EntriesData);
  const [isAFiltered, setIsAFiltered] = useState(false);
  const [isBFiltered, setIsBFiltered] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState({});
  const [infoWindowPosition, setinfoWindowPosition] = useState({});

  const mapRef = useRef(null);

  const scrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        {...{ infoWindowData, setInfoWindowData, mapRef, infoWindowPosition }}
      />
      <Container className="mt-4">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <CategoryList
              category="CatA"
              cardWidth={4}
              EntriesData={entries.filter((entry) => entry.category === "A")}
              {...{ setInfoWindowData, setinfoWindowPosition, scrollToMap }}
            />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <CategoryList
              category="CatB"
              cardWidth={12}
              EntriesData={entries.filter((entry) => entry.category === "B")}
              {...{ setInfoWindowData, setinfoWindowPosition, scrollToMap }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
