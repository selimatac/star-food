import React, { useState } from "react";
import { SidebarMenu } from "../../components";
import { Outlet, useLocation } from "react-router-dom";

const Orders = () => {
  let location = useLocation();
  const sideBarMenuData = [
    { id: "1", title: "Create Order", count: "", url: "/orders/create" },
    { id: "2", title: "Accepted", count: "0", url: "/orders/list/accepted" },
    { id: "3", title: "Cooking", count: "0", url: "/orders/list/cooking" },
    {
      id: "4",
      title: "Parcel Ready",
      count: "0",
      url: "/orders/list/parcelready",
    },
    { id: "5", title: "Delivered", count: "0", url: "/orders/list/delivered" },
    { id: "6", title: "Completed", count: "0", url: "/orders/list/completed" },
  ];

  return (
    <div className="page">
      <SidebarMenu title="Orders" data={sideBarMenuData}/>
      <main className="page__wrapper">
        <h1 className="page__wrapper-title">{location?.state?.title}</h1>
        <div className="page__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Orders;
