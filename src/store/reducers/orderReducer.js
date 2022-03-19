import {
  ORDER_ADDED,
  ORDER_STATUS_UPDATED,
  ERROR,
} from "../actions/ordersActions";

const initState = {};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case ORDER_ADDED:
      console.log(action.order + " order added succesfully", state);
      return state;
    case ORDER_STATUS_UPDATED:
      console.log(action.order + " order status updated succesfully", state);
      return state;
    case ERROR:
      console.log("order error : " + action.err, state);
      return state;
    default:
      return state;
  }
};

export default orderReducer;
