import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act, useEffect } from "react";

//configure =환경
//createSlice == useState 랑 비슷한 역할
//initialState 초기값
let imsiData = createSlice({
  name: "imsiData",
  initialState: {
    name: "장원영",
    groupName: "아이브",
    age: 20,
  },
  reducers: {
    changeGroup(state) {
      state.groupName = "아이브그룹";
    },
    //state는 원래의 값, action은 저쪽에서 넘어온 값
    //payload 화물,택배
    addage(state, action) {
      state.age = state.age + action.payload;
    },
  },
});

let userName = createSlice({
  name: "userName",
  initialState: ["jang", "Lee", "pack"],
});
let productStock = createSlice({
  name: "productStock",
  initialState: [11, 8, 2],
});
let cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, title: "White and Black", count: 2, price: 120000 },
    { id: 1, title: "Red Knit", count: 1, price: 120000 },
  ],
  reducers: {
    pluse(state, action) {
      state.map((x) => {
        if (x.id == action.payload) {
          x.count++;
        }
      });
    },
    minus(state, action) {
      state.map((x) => {
        if (x.id == action.payload && x.count > 0) {
          x.count--;
        }
      });
    },
    addproduct(state, action) {
      const item = state.find((x) => x.id == action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    deletecart(state, action) {
      return state.filter((x) => x.id !== action.payload);
    },
    descCart(state) {
      state.sort((x, y) => {
        if (x.title > y.title) return 1;
        if (x.title < y.title) return -1;
        return 0;
      });
    },
    ascCart(state) {
      state.sort((x, y) => {
        if (x.title > y.title) return -1;
        if (x.title < y.title) return 1;
        return 0;
      });
    },
  },
});
let loginedUser = createSlice({
  name: "loginedUser",
  initialState: "seegeegaja",
  //수정
  reducers: {
    //state의 의미는 원래의 데이터를 의미함(seegeegaja)
    changeUserName(state) {
      return state + "님";
    },
  },
});

export default configureStore({
  reducer: {
    userName: userName.reducer,
    productStock: productStock.reducer,
    cartData: cartData.reducer,
    loginedUser: loginedUser.reducer,
    imsiData: imsiData.reducer,
  },
});
export let { changeUserName } = loginedUser.actions;
export let { changeGroup } = imsiData.actions;
export let { addage } = imsiData.actions;
export let { pluse, minus, addproduct, deletecart, descCart, ascCart } =
  cartData.actions;
