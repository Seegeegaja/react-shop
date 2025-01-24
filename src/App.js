import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myData from "./data/test-data";
import data from "./data/shoes-data";
import { useEffect,useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import Event from "./pages/Event/Event";
import CartPage from "./pages/CartPage";
import axios from "axios";
import MainPage from "./pages/MainPage";

function App() {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    axios.get('https://seegeegaja.github.io/js/shoes_data.json')
    .then((result)=>{
      console.log(result.data)
      let temp = [...result.data];
      setProduct([...temp])
    })
    .catch("요청 실패")
  },[])

  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate("/main"); }}> Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/cart"); }} >Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate("/about"); }} > About </Nav.Link>
            <Nav.Link onClick={() => { navigate("/event"); }}> Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
              {/* <Link to={"/"}>Home</Link> */}

      <div className="main-bg" onClick={() => { navigate("/detail");}}></div>

      {/* Router처리 */}
      <Routes>
        <Route path="/main/" element={<div><MainPage product={product}/></div>}  >
         <Route path=":id" element={ <div> <DetailPage product={product} /> </div> } ></Route>
        </Route>
        <Route index element={<div>홈...</div>} />
        <Route path="/detail/:id"element={ <div> <DetailPage product={product} /> </div> } ></Route>
        <Route path="/cart" element={ <div> <CartPage /> </div> }/>
        <Route path="/about" element={<div> <AboutPage /></div>}>
          <Route path="member" element={<div>직원 소개 페이지</div>} />
          <Route path="location" element={<div>길안내 페이지</div>} />
        </Route>
        <Route path="/event" element={ <div> <Event /> </div> }>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념쿠폰</div>} />
        </Route>
        <Route path="*" element={<div> <h4>Page Not Found 404 error</h4> </div>}/>
      </Routes>

      
    </div>
  );
}
{/* <button
  onClick={() => {
    axios
    .get('https://seegeegaja.github.io/js/shoes_data.json')
    .then((result)=>{
      //요청 성공시 처리할 곳
      
      console.log(result.data)
      let temp = [...product , ...result.data];
      console.log(temp);
      setProduct([...temp]);
    })
    .catch(()=>{
      //요청 실패시 처리할곳
      console.log("실패함")
    });
  }}
  >
  데이터 가져오기
</button> */}

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
export default App;
