export const ORDER_ADDED = "ORDER_ADDED";
export const ERROR = "ERROR";

export const createOrder = ({ firestore }, order) => {
  return (dispatch, getState) => {
    firestore
      .collection("orders")
      .add(order)
      .then(() => {
        console.log("Then it was done");
        dispatch({ type: ORDER_ADDED, order });
      })
      .catch((err) => {
        dispatch({ type: ERROR, err });
      });
  };
};
