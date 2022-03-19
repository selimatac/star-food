import { MenuIcon } from "@heroicons/react/outline";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { OrderItem } from "../components";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const OrderList = () => {
  useFirestoreConnect("orders");
  const data = useSelector((state) => state.firestore.ordered.orders);
  const params = useParams();

  return (
    <div className="order-list">
      <div className="order-list__header">
        <button type="button" className="star-btn star-btn__secondary">
          <MenuIcon className="w-4 text-black-10 mr-2" /> Showing 10 Orders
        </button>
        <NavLink
          type="button"
          to="/orders/create"
          state={{ title: "Create Order" }}
          className="star-btn star-btn__primary"
        >
          Add New Order
        </NavLink>
      </div>
      <div className="order-list__body">
        {data
          ?.filter((f) => f.orderStatus === params.id)
          .map((x, index) => (
            <OrderItem key={index} data={x} />
          ))}
      </div>
    </div>
  );
};

export default OrderList;
