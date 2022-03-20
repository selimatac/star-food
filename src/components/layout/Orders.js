/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { SidebarMenu } from "../../components";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/actions/themeActions";
import { MenuIcon } from "@heroicons/react/outline";

const Orders = () => {
  let location = useLocation();
  let params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useFirestoreConnect({
    collection: "orders",
    orderBy: ["orderDateTime", "desc"],
    limit: 10,
  });
  const orders = useSelector((state) => state.firestore.ordered.orders);
  const isShow = useSelector((state) => state.theme.isShow);
  const [sidebarMenuData, setSidebarMenuData] = useState([]);
  const menuData = [
    {
      id: "1",
      title: "New Orders",
      count: 0,
      param: "new",
    },
    { id: "2", title: "Accepted", count: 0, param: "accepted" },
    { id: "3", title: "Cooking", count: 0, param: "cooking" },
    {
      id: "4",
      title: "Parcel Ready",
      count: 0,
      param: "parcelready",
    },
    { id: "5", title: "Delivered", count: 0, param: "delivered" },
    { id: "6", title: "Completed", count: 0, param: "completed" },
  ];

  useEffect(() => {
    if (orders) {
      menuData?.forEach((item, index) => {
        menuData[index].count = orders.filter(
          (o) => o.orderStatus === menuData[index].param
        ).length;
      });
      setSidebarMenuData([...menuData]);
    }
  }, [orders]);

  useEffect(() => {
    !params.id &&
      location.pathname !== "/orders/create" &&
      navigate(`list/${menuData[0].param}`, {
        state: { title: menuData[0].title },
      });
  }, [params]);

  return (
    <div className="page">
      <SidebarMenu title="Orders" data={sidebarMenuData} />
      <main className="page__wrapper">
        <h1 className="page__wrapper-title">
          <button type="button" onClick={() => dispatch(toggleMenu(!isShow))}>
            <MenuIcon className="w-6 text-black" />
          </button>
          {location?.state?.title}
        </h1>
        <div className="page__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Orders;
