import * as types from "./action.type";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
  cartdata: [],
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case types.ADD_PRODUCT_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartdata: [...state.cartdata, payload],
      };
    case types.ADD_PRODUCT_CART_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case types.GET_CART_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CART_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartdata: [...payload],
      };
    case types.GET_CART_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
