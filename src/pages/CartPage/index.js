import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

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
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((x) => {
            return (
              <tr key={x.id}>
                <td>{(x.id)+1}</td>
                <td>{x.title}</td>
                <td>{x.count}</td>
                <td>단추</td>
              </tr>
            );
          })}
          
        </tbody>
      </Table>
    </div>
  );
}
export default CartPage;
