import React from "react";
import PropTypes from "prop-types";
import { PrinterIcon } from "@heroicons/react/outline";
import { updateOrderStatus } from "../../store/actions/ordersActions";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useDispatch } from "react-redux";

const OrderItem = ({ data }) => {
  useFirestoreConnect("orders");
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const moveToCooking = async () => {
    await dispatch(updateOrderStatus({ firestore }, data, "cooking"));
  };
  return (
    <div className="order-item">
      <div className="order-item__info">
        <div>
          Order Number<div>{data?.orderNumber}</div>
        </div>
        <div>
          Date / Time<div>{data?.orderDateTime}</div>
        </div>
        <div>
          Name<div>{data?.name}</div>
        </div>
        <div>
          Contact<div>{data?.contact}</div>
        </div>
        <div>
          Trans Type
          <div
            className={`text-white star-badge ${
              data?.transType === "Takeaway"
                ? "star-badge__orange"
                : "star-badge__primary"
            } `}
          >
            {data?.transType}
          </div>
        </div>
        <div>
          Amount<div>{data?.totalAmount}$</div>
        </div>
      </div>
      <div className="order-item__ordered-items">
        <div className="-title">
          Ordered <div>Items</div>
        </div>
        {data?.selectedItems.map((x, index) => (
          <div className="-item" key={index}>{`${x.text} X ${x.quantity}`}</div>
        ))}
      </div>
      <div className="order-item__footer">
        <div className="-left">
          <div>Additional information from customer</div>
          <div>{data?.message}</div>
        </div>
        <div className="-right">
          <button className="mr-5">
            <PrinterIcon className="w-8 text-gray-70" />
          </button>
          <button
            className="star-btn star-btn__primary"
            type="button"
            onClick={moveToCooking}
          >
            Move to Cooking
          </button>
        </div>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  data: PropTypes.object,
};
export default OrderItem;
