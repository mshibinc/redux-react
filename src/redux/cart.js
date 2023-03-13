import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addTocart: (state, action) => {
      const itemExist = state.cartList.find(
        (itm) => itm.id === action.payload.id
      );
      if (itemExist) {
        state.cartList.forEach((itm) => {
          if (itm.id === action.payload.id) {
            itm.count++;
          }
        });
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
    increment: (state, action) => {
      let pid = action.payload;
      state.cartList.forEach((itm) => {
        if (itm.id === pid) {
          itm.count++;
        }
      });
    },
    decrement: (state, action) => {
      let pid = action.payload;
      state.cartList.forEach((itm) => {
        if (itm.id === pid) {
          itm.count--;
        }
      });
    },
    removeCart: (state, action) => {
      state.cartCount = 0;
    },
  },
});
export const { increment, decrement, addTocart } = cartSlice.actions;
export default cartSlice.reducer;
