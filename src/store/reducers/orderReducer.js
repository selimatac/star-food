import { ORDER_ADDED, ERROR } from "../actions/ordersActions";

const initState = {};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case ORDER_ADDED:
      console.log(action.order + " order added succesfully", state);
      return state;
    case ERROR:
      console.log("order error : " + action.err, state);
      return state;
    default:
      return state;
  }
};

export default orderReducer;
