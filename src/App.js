import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "./Components/Map";
import EntriesList from "./Components/EntriesList";
import EntriesData from "./TestData.json";

function App() {
  return (
    <div className="App">
      <Map />
      <Container>
        <Row>
          <Col sm={8}>
            <EntriesList
              customWidth={6}
              EntriesData={EntriesData.filter(
                (entry) => entry.category === "A"
              )}
            />
          </Col>
          <Col sm={4}>
            <EntriesList
              customWidth={12}
              EntriesData={EntriesData.filter(
                (entry) => entry.category === "B"
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
