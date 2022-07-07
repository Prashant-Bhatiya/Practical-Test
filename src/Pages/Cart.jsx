import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/ProductData/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cartArr = useSelector((store) => store.appReducer.cartdata);
  useEffect(() => {
    dispatch(getCartData());
  }, []);
  console.log(cartArr)

  return <div>Cart</div>;
};

export default Cart;
