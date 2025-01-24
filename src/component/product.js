import React from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  let i = props.index;
  let p = props.product;
  let navigate = useNavigate();
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + `./images/shoes${p[i].id + 1}.jpg`}
        onClick={() => {
          navigate(`/main/${i}`);
          //최근 본 상품 번호를 localStoryge에 배열로 저장
          //중복을 허용하지 않도록
          //localStorage 정보 읽어오기
          let recentData = JSON.parse(localStorage.getItem("recent"));
          console.log("recentData", recentData);
          let nowData = [];

          if (recentData != null) {
            nowData = [...recentData];
          }
          nowData.push(i);
          //Set으로 중목된값을 제거
          //[0,0,1,0,2] ==> [0,1,2]
          nowData = [...new Set(nowData)];
          //스토리지에 있는거 읽어서 중복제거후 다시 저장
          localStorage.setItem("recent", JSON.stringify(nowData));
        }}
        width="80%"
      ></img>
      <h4>{p[i].title}</h4>
      <p>{p[i].content}</p>
      <p>{Intl.NumberFormat().format(p[i].price)}</p>
    </div>
  );
}
export default Product;
