import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Map from "./Components/Map";
import EntriesList from "./Components/EntriesList";
import EntriesData from "./TestData.json";

function App() {
  return (
    <div className="App">
      <Map />
      <Container className="mt-4">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <EntriesList
              cate="CatA"
              cardWidth={4}
              EntriesData={EntriesData.filter(
                (entry) => entry.category === "A"
              )}
            />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <EntriesList
              cate="CatB"
              cardWidth={12}
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
