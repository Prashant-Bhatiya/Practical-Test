import * as types from "./action.type";
import axios from "axios";

export const getDataRequest = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};
export const getDataSuccess = (payload) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};
export const getDataFailure = () => {
  return {
    type: types.GET_DATA_FAILURE,
  };
};

export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  axios
    .get("https://api4286.s3.ap-south-1.amazonaws.com/products.json")
    .then((res) => {
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

// ----------------------------------------------------------------------------
export const addProductCartRequest = () => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
  };
};
export const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};
export const addProductCartFailure = () => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
  };
};

export const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  axios
    .post("http://localhost:8080/cart", product)
    .then((res) => dispatch(addProductCartSuccess(res.data)))
    .catch((err) => dispatch(addProductCartFailure(err)));
};

// ----------------------------------------------------------------------------
export const GetCartProductRequest = () => {
  return {
    type: types.GET_CART_DATA_REQUEST,
  };
};
export const GetCartProductSuccess = (payload) => {
  return {
    type: types.GET_CART_DATA_SUCCESS,
    payload,
  };
};
export const GetCartProductFailure = () => {
  return {
    type: types.GET_CART_DATA_FAILURE,
  };
};

export const getCartData = (payload) => (dispatch) => {
  dispatch(GetCartProductRequest());
  axios
    .get("http://localhost:8080/cart")
    .then((res) => dispatch(GetCartProductSuccess(res.data)))
    .catch((err) => dispatch(GetCartProductFailure(err)));
};
