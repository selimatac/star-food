export const ORDER_ADDED = "ORDER_ADDED";
export const ORDER_STATUS_UPDATED = "ORDER_STATUS_UPDATED";
export const ERROR = "ERROR";

export const createOrder = ({ firestore }, order) => {
  return (dispatch, getState) => {
    firestore
      .collection("orders")
      .add(order)
      .then(() => {
        dispatch({ type: ORDER_ADDED, order });
      })
      .catch((err) => {
        dispatch({ type: ERROR, err });
        console.log(err);
      });
  };
};

export const updateOrderStatus = ({ firestore }, order, newValue) => {
  return (dispatch, getState) => {
    firestore
      .collection("orders")
      .doc(order.id)
      .set(
        {
          ...order,
          orderStatus: newValue,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: ORDER_STATUS_UPDATED, order });
      })
      .catch((err) => {
        dispatch({ type: ERROR, err });
        console.log(err)
      });
  };
};