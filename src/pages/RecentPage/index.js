import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RecentPage(props) {
  let p=props.product;
  let navigate = useNavigate();
  const [recent, setRecent] = useState([]);
  useEffect(()=>{
    const temp = localStorage.getItem("recent")
    if(temp){
      setRecent(JSON.parse(temp));
    }
  },[])
  return (
    <div>
      <h2>최근 본 상품</h2>
      <Row>
        {recent.map((x, y)=>{
          return(
          <Col xs={6} md={4} key={y}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL} /images/shoes${x+1}.jpg`} />
              <Card.Body>
                <Card.Title>{p[x].title}</Card.Title>
                <Card.Text>
                  {p[x].content}
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                  navigate(`/main/${x}`)
                }}>go Shop</Button>
              </Card.Body>
            </Card>
          </Col>
          )

        })
        }
      </Row>
    </div>
  );
}
export default RecentPage;
