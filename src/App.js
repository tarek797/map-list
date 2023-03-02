import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Components/Map";
import EntriesList from "./Components/EntriesList";
import EntriesData from "./TestData.json";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState(EntriesData);
  const [isAFiltered, setIsAFiltered] = useState(false)
  const [isBFiltered, setIsBFiltered] = useState(false)



  function filterByCategoryHandler(category) {
    if (!isAFiltered  && category === "A") {
      setEntries(EntriesData);
      setEntries((prev) => prev.filter((entry) => entry.category === category));
      setIsAFiltered(true);
    } else if (isAFiltered && category === "A") {
      setEntries(EntriesData);
      setIsAFiltered(false);
    }else if (!isBFiltered && category === "B") {
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
        EntriesData={entries}
        handleFilterByCategory={filterByCategoryHandler}
      />
      <Container className="mt-4">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <EntriesList
              cate="CatA"
              cardWidth={4}
              EntriesData={entries.filter((entry) => entry.category === "A")}
            />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <EntriesList
              cate="CatB"
              cardWidth={12}
              EntriesData={entries.filter((entry) => entry.category === "B")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
