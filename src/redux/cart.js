import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  cartList: [],
  cartCount: 0
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addTocart: (state, action) => {
      // sate.cartCount = 1;
      //action.type
      // console.log(state.cartList);
      state.cartList.push(action.payload);
    },
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
    removeCart: (state) => {
      state.cartCount = 0;
    }
  }
});
export const { increment, decrement, addTocart } = cartSlice.actions;
export default cartSlice.reducer;
