import { MenuIcon } from "@heroicons/react/outline";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { OrderItem } from "../components";

const OrderList = () => {
  const data = [];
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
        {data.map((x) => (
          <OrderItem data={x} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
