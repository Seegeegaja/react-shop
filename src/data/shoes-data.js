// import axios from "axios";
// import { useEffect, useState } from "react";

// export default product;

//   let [product, setProduct] = useState([]);

//   useEffect(()=>{
//     axios.get('https://seegeegaja.github.io/js/shoes_data.json')
//     .then((result)=>{
//       setProduct( [...result.data]);
  
//     })
//     .catch("요청 실패")
//   },[product])
  

// // useEffect의 구조
//   // useEffect(()=>{
//     // second
//   // }, 몇초-first)
//   // ,{}--third }) ; --[]만 비워두면
//   //얘는 프로그램 시작할 때 딱 한번만 실행함
//   //2초 후에 alert스테이트를 펄스로 변경
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setAlert(false)
//   //     console.log(1)
//   //   }, 2000)
//   // },)
