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
import RecentPage from "./pages/RecentPage";
import { getAuth, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
// 구글 로그인 상태 여부를 파악해주는 기능
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  //로컬 스토리지에 초기 설정
  // useEffect(()=>{
  //   localStorage.setItem('recent',JSON.stringify([]))
  // },[])

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // 구글 로그인 상태저장 스테이트
  const [userInfo, setUserInfo] = useState(null);
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);


  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user){
        setUserInfo(user)
        console.log("====login success : " , userInfo)

      }else{
        console.log("=====logout :" , userInfo)
      }
    })
  }, [auth, navigate, userInfo])
  useEffect(()=>{
    axios.get('https://seegeegaja.github.io/js/shoes_data.json')
    .then((result)=>{
      let temp = [...result.data];
      setProduct([...temp])
    })
    .catch("요청 실패")
  },[])

  // localStorage.setItem('data', JSON.stringify(product))
  // let outData = localStorage.getItem('data');
  // console.log(JSON.parse(outData))
  function friebaseLogin(){
    signInWithPopup(auth, provider)
     .then((result) => {})
     .catch((error) => {
     console.log(error)
    });
  }
  function firebaseLogout(){
    signOut(auth).then(() => {
     // Sign-out successful.
     setUserInfo(null);
     navigate("/");
    }).catch((error) => {
     // An error happened.
     console.log(error)
    });
  }

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/main"); }}> Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/recent"); }}> Recent</Nav.Link>
            {
              userInfo === null ? null : <Nav.Link onClick={() => { navigate("/cart"); }} >Cart</Nav.Link>
            }
            <Nav.Link onClick={() => { navigate("/about"); }} > About </Nav.Link>
            <Nav.Link onClick={() => { navigate("/event"); }}> Event</Nav.Link>
          </Nav>
          <Nav>
            {
              userInfo ===null ? 
              (<Nav.Link onClick={ friebaseLogin }>Login</Nav.Link> ) :
              <div className="userInfoArea">
                <span>{userInfo.displayName}</span>
                <img src={userInfo.photoURL} className="userImage"></img>
                <Nav.Link onClick={ firebaseLogout }>Logout</Nav.Link> 
              </div>
            }
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
        <Route path="/recent" element={<div><RecentPage product={product}/></div>}></Route>
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
