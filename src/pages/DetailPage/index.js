import { Navigate, useParams } from "react-router-dom";
import Discount from "./Discount";
import { useEffect, useState } from "react";

function Detail(props) {
  let [count ,setCount] = useState();
  let [alert, setAlert] = useState(true);
  let {id} = useParams();
  let shoes = props.product[id]
  let strPrice = shoes.price.toLocaleString('ko-KR');
  let i = parseInt(id)+1;
  // useEffect의 구조
  // useEffect(()=>{
    // second
  // }, 몇초-first)
  // ,{}--third }) ; --[]만 비워두면
  //얘는 프로그램 시작할 때 딱 한번만 실행함
  //2초 후에 alert스테이트를 펄스로 변경
  useEffect(()=>{
    let myTimer = setTimeout(()=>{setAlert(false)},2000)
    return()=>{
      clearTimeout(myTimer)
    }
  },)

  useEffect(()=>{
    //호출시 실행되는곳
    console.log("렌더링 될때마다 실행")
    //종료시 (사라질 때,또는 재랜더링 때) 실행
    return()=>{
      console.log("종료시 실행")
    }
  },[count])
  //없을때 : 매번실행
  //[]: 딴 한번만 실행 될때
  //[스테이트 ] : 스테이트가 바뀔때마다 실행
  
  // let findId = props.product.find((x)=>{x.id == Number(id)})
  // if( findId == null){
  //   alert('찾으시는 페이지가 없습니다')
  //   Navigate(-1);
  //   return null;
  // }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${process.env.PUBLIC_URL} /images/shoes${i}.jpg`}
            width="100%"
          ></img>
        </div>
        {
        alert == true ? <Discount/> : null
        }
        <div className="col-md-6">
          <h4 className="pt-5">{props.product[id].title}</h4>
          <p>{props.product[id].content}</p>
          <p>{strPrice}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
