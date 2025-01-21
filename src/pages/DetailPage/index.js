import { useParams } from "react-router-dom";

function Detail(props) {
  let {id} = useParams();
  let shoes = props.product[id]
  let shoesImage = './images/shoes' + (Number(id)) + '.jpg';
  let strPrice = shoes.price.toLocaleString('ko-KR');
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${process.env.PUBLIC_URL} /images/shoes${id}.jpg`}
            width="100%"
          ></img>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{strPrice}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
