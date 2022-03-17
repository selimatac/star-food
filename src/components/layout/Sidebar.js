import React from "react";
import { NavLink } from "react-router-dom";
import { CubeIcon, CogIcon, CollectionIcon } from "@heroicons/react/outline";
import BrandLogo from "../../assets/icons/logo.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink
        to="/"
        state={{ title: "Create Order" }}
        title="Star Food"
      >
        <img src={BrandLogo} alt="Star Food" className="sidebar__logo" />
      </NavLink>
      <NavLink
        to="/orders"
        className="sidebar__link"
        title="Orders"
      >
        <CubeIcon xlinkTitle="Orders" className="w-6 text-black" />
      </NavLink>
      <NavLink to="/blabla" className="sidebar__link" title="List">
        <CollectionIcon xlinkTitle="List" className="w-6 text-black" />
      </NavLink>
      <NavLink to="/settings" className="sidebar__link" title="Settings">
        <CogIcon xlinkTitle="Settings" className="w-6 text-black" />
      </NavLink>
    </aside>
  );
};

export default Sidebar;
