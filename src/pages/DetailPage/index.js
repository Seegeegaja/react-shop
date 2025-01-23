import { Navigate, useParams } from "react-router-dom";
import Discount from "./Discount";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

function Detail(props) {
  const [key, setKey] = useState("home");
  // let [count ,setCount] = useState();
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let shoes = props.product[id];
  let strPrice = shoes.price.toLocaleString("ko-KR");
  let i = parseInt(id) + 1;
  let [review , setReview] = useState([])

  
  useEffect(()=>{
    axios.get('https://zzzmini.github.io/js/shoesReview.json')
    .then((result)=>{
      console.log(result.data)
      let temp = [...result.data]
      setReview(temp);

    })
    .catch('asd')
  
  },[])
  
   
  // useEffect의 구조
  // useEffect(()=>{
  // second
  // }, 몇초-first)
  // ,{}--third }) ; --[]만 비워두면
  //얘는 프로그램 시작할 때 딱 한번만 실행함
  //2초 후에 alert스테이트를 펄스로 변경
  useEffect(() => {
    let myTimer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(myTimer);
    };
  }, []);
  
  // useEffect(()=>{
  //   //호출시 실행되는곳
  //   console.log("렌더링 될때마다 실행")
  //   //종료시 (사라질 때,또는 재랜더링 때) 실행
  //   return()=>{
  //     console.log("종료시 실행")
  //   }
  // },[count])
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
        {alert == true ? <Discount /> : null}
        <div className="col-md-6">
          <h4 className="pt-5">{props.product[id].title}</h4>
          <p>{props.product[id].content}</p>
          <p>{strPrice}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="무료 배송 및 반품">
            <div>
              <p>
                무료 배송 및 반품 일반 배송 • 배송지역: 전국 (일부 지역 제외) •
                배송비: 무료배송 • 제품 수령일로부터 14일 이내 제품에 대해서만
                무료 반품 서비스가 가능합니다. • 본사는 교환 서비스를 제공하지
                않습니다. 일반 배송 자세히 알아보기 반품 자세히 알아보기
                오늘도착 서비스 • 이용시간: 오전 10시 30분까지 결제 시, 당일
                도착 (일요일, 공휴일 제외) • 서비스지역:
                서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시 수지구∙기흥구,
                부천시 중동∙상동∙심곡동 • 서비스비용: 5,000원
              </p>
            </div>
          </Tab>
          <Tab eventKey="profile" title="리뷰(4.5 ★★★★☆)" >
            <div>
              {review.length > 0 ? 
              (review
                .filter((item)=> 
                      item.productId === parseInt(id)+1)
                .map((item)=> ( 
                <div key = {item.reviewId} style={{marginBottom:"10px"}}>
                  <h5>{item.title}</h5>
                  <p>{item.review}</p>
                  <p>평점 : {item.point}★</p>
                  <hr></hr>
                </div>))
              ):(<p></p>)}
            </div>
            {review.forEach}
            
            
          </Tab>
          <Tab eventKey="contact" title="추가 정보">
            <div>
              <p>
                ● 제조연월: 수입제품으로 각 제품별 입고 시기에 따라 상이하여
                정확한 제조연월 제공이 어렵습니다. 제조연월을 확인하시려면
                고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신
                제품의 라벨을 참고하시기 바랍니다. ● A/S 책임자와 전화번호:
                (유)나이키코리아 온라인 스토어 고객센터 / 080-022-0182 ●
                세탁방법 및 취급시 주의사항: 자세한 내용은 '자세히 보기'를
                클릭하여 확인 부탁드립니다. ● 미성년자 권리 보호 안내: 자세한
                내용은 '자세히 보기' 를 클릭하여 확인 부탁드립니다.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
        
    </div>
  );
}
export default Detail;
