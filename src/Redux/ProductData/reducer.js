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
    default:
      return state;
  }
};
