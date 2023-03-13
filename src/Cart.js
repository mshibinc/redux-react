import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTocart, increment, decrement } from "./redux/cart";
export default function Cart({ name, id }) {
  const dispatch = useDispatch();
  const { cartList, cartCount } = useSelector((state) => state.cart);
  const productCartCount = useMemo(() => {
    return cartList?.find((itm) => id === itm?.id)?.count;
  }, [cartList]);
  return (
    <div className="App">
      <h4>{name}</h4>
      {productCartCount > 0 ? (
        <>
          <button onClick={() => dispatch(decrement(id))}>-</button>
          <span>{productCartCount}</span>
          <button onClick={() => dispatch(increment(id))}>+</button>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(addTocart({ name, id }));
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
