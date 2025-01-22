import { useEffect, useState } from "react";

function CartPage (){
  let [count , setCount] = useState(0)
  //해당하는 컴포넌트가 로딩이 되기전에 먼저 실행되는것 useEffect
  useEffect(()=>{
    // for(let i = 0; i<1000; i++){
    //   console.log(i);
    // }
    console.log('안녕 난 useEffect Mounted 야 반가워 ')
  })
  
  
  return (
    <div>
      <h3>CartPage</h3>
      <button onClick={()=>{
        setCount(count+1)
      }}>눌러</button>
      <span>{count}</span>
    </div>
  )
}
export default CartPage;