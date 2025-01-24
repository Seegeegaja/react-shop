import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "../../store";
import {
  changeGroup,
  addage,
  pluse,
  minus,
  deletecart,
  descCart,
  ascCart,
} from "../../store";

function CartPage() {
  let userName = useSelector((state) => {
    return state.userName;
  });
  let productStock = useSelector((state) => {
    return state.productStock;
  });
  let cartData = useSelector((state) => {
    return state.cartData;
  });

  console.log(userName);
  console.log(productStock);
  console.log(cartData);
  //스토어의 있는 변경함수 호출
  let dispatcher = useDispatch();
  let loginedUser = useSelector((state) => {
    return state.loginedUser;
  });
  console.log(loginedUser);

  let imsiData = useSelector((state) => {
    return state.imsiData;
  });
  console.log(imsiData);
  const totalPrice = cartData.reduce((x, y) => x + y.price * y.count, 0);
  const amount = new Intl.NumberFormat().format(totalPrice);
  let asd = 0;
  for(let i=0; i<cartData.length; i++){
    asd = asd + (cartData[i].count * cartData[i].price)
  }
  console.log(asd)
  return (
    <div>
      {/* <h4>{loginedUser}</h4>
      <button
        onClick={() => {
          dispatcher(changeUserName());
        }}
      >
        유저이름 변경
      </button>{imsiData.name} : {imsiData.groupName}<button onClick={()=>{
        dispatcher(changeGroup());
      }}>체인지</button><span onClick={()=>{
        dispatcher(addage(3))
      }}>➕</span>{imsiData.age} */}
      <h4>{loginedUser}님의 장바구니</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              상품명{" "}
              <span
                onClick={() => {
                  dispatcher(descCart());
                }}
              >
                ▲
              </span>
              <span
                onClick={() => {
                  dispatcher(ascCart());
                }}
              >
                ▼
              </span>
            </th>
            <th>단가</th>
            <th>금액</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((x, y) => {
            return (
              <tr key={x.id}>
                <td>{x.id + 1}</td>
                <td>{x.title}</td>
                <td>{new Intl.NumberFormat().format(x.price)}원</td>
                <td>{new Intl.NumberFormat().format(x.price * x.count)}원</td>
                <td>
                  {x.count}
                  <span
                    onClick={() => {
                      dispatcher(pluse(x.id));
                    }}
                  >
                    ➕
                  </span>
                  <span
                    onClick={() => {
                      dispatcher(minus(x.id));
                    }}
                  >
                    ➖
                  </span>
                </td>
                <td
                  onClick={() => {
                    dispatcher(deletecart(x.id));
                  }}
                >
                  ❌
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>총금액</td>
            <td colSpan={2}>{amount}원</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default CartPage;
