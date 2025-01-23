import {configureStore, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

//configure =환경
//createSlice == useState 랑 비슷한 역할
//initialState 초기값
let userName = createSlice({
  name : 'userName',
  initialState : ['jang', 'Lee','pack']

})
let productStock = createSlice({
  name : 'productStock',
  initialState : [11,8,2]
})
let cartData = createSlice({
  name : 'cartData',
  initialState : [
    { id : 0, title : 'White and Black', count : 2},
    { id : 1, title : 'Red Knit', count : 1}
  ]
})





export default configureStore({
  reducer : {
    userName : userName.reducer,
    productStock : productStock.reducer,
    cartData : cartData.reducer,
  }
})