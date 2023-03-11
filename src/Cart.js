import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTocart, increment, decrement } from "./redux/cart";
export default function Cart({ name, id }) {
  const dispatch = useDispatch();
  const { cartList, cartCount } = useSelector((state) => state.cart);
  return (
    <div className="App">
      <h4>{name}</h4>
      {cartCount == 0 ? (
        <button
          onClick={() => {
            dispatch(addTocart({ name, id }));
          }}
        >
          Add to cart
        </button>
      ) : (
        <>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{cartCount}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </>
      )}
    </div>
  );
}
