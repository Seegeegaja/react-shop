import React from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  let i=props.index;
  let p=props.product;
  let navigate = useNavigate();
  return (
    <div >
      <img
        src={process.env.PUBLIC_URL + `./images/shoes${p[i].id+1}.jpg`}
        onClick={()=>{
          navigate(`/main/${i}`)
        }}
        width="80%"
      ></img>
      <h4>{p[i].title}</h4>
      <p>{p[i].content}</p>
    </div>
  );
}
export default Product;