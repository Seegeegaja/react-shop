import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../../component/product";
import { Outlet } from "react-router-dom";


function MainPage(props){
  let product = props.product;
  
  return(
    <Container>
      <Outlet></Outlet>
        <Row className="justify-content-md-center">
          {product.map((x, index) => {
            return (
              <Col className="box" md="4" sm="4" xs="4">
                <Product product={product} index={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
  )
}
export default MainPage;