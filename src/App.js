import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myData from "./data/test-data";
import data from "./data/shoes-data";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row className="justify-content-md-center">
          {/* <img
              src="https://zzzmini.github.io/images/shoes1.jpg"
              width={"80%"}
            ></img> */}
          {product.map((x, y) => {
            return (
              <Col>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `./images/shoes${product[y].id + 1}.jpg`
                  }
                  width="80%"
                ></img>
                <h4>{product[y].title}</h4>
                <p>{product[y].content}</p>
              </Col>
            );
          })}
          {product.map((x, index) => {
            return(
            <Col>
              <Product product={product} index={index}/>
            </Col>

            );
          })}
        </Row>
      </Container>
    </div>
  );
}


export default App;
