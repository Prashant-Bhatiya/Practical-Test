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
