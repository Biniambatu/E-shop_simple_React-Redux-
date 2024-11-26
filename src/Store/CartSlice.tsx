import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"carCart",
    initialState: {
        cartList: [],
        price: 0
    },
    reducers:{
       Add_To_Cart(state,action){
          const updateCart = state.cartList.concat(action.payload);
          const updatePrice = state.price + action.payload.price;
          return {...state, cartList: updateCart, price: updatePrice}
       },
       Remove_from_Cart(state,action){
          const updateCartList = state.cartList.filter(item => item.id !== action.payload.id);
          const updatePrice = state.price - action.payload.price;
          return {...state, cartList:updateCartList, price: updatePrice}
       }
    } 
})
export const {Add_To_Cart,Remove_from_Cart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;