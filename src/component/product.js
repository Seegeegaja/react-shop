import React from "react";
function Product(props) {
  let i=props.index;
  let p=props.product;
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + `./images/shoes${props[i].id + 1}.jpg`}
        width="80%"
      ></img>
      <h4>{props[i].title}</h4>
      <p>{props[i].content}</p>
    </div>
  );
}
export default Product;