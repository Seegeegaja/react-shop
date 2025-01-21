import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myData from "./data/test-data";
import data from "./data/shoes-data";
import { useState } from "react";
import Product from "./component/product";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import Event from "./pages/Event/Event";

function App() {
  const [product, setProduct] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              {/* <Link to={"/"}>Home</Link> */}
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              {/* <Link to={"/"}>Home</Link> */}
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        onClick={() => {
          navigate("/detail");
        }}
      ></div>

      {/* Router처리 */}
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route index element={<div>홈...</div>} />
        <Route
          path="/detail/:id"
          element={
            <div>
              <DetailPage product={product} />
            </div>
          }
        >

        </Route>
        <Route path="/cart" element={<div>장바구니 페이지</div>} />
        <Route
          path="/about"
          element={
            <div>
              <AboutPage />
            </div>
          }
        >
          <Route path="member" element={<div>직원 소개 페이지</div>} />
          <Route path="location" element={<div>길안내 페이지</div>} />
        </Route>
        <Route
          path="/event"
          element={
            <div>
              <Event />
            </div>
          }
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념쿠폰</div>} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h4>Page Not Found 404 error</h4>
            </div>
          }
        />
      </Routes>

      <Container>
        <Row className="justify-content-md-center">
          {product.map((x, index) => {
            return (
              <Col>
                <Product product={product} index={index} />
              </Col>
            );
          })}
          {/* <img
              src="https://zzzmini.github.io/images/shoes1.jpg"
              width={"80%"}
            ></img> */}
          {/* {product.map((x, y) => {
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
          })} */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
