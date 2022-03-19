import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../assets/icons/logo.svg";
const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={BrandLogo} alt="Star Food" className="sidebar__logo" />

      <h1 className="font-bold text-black-10 text-4xl text-center">Wellcome Star Food</h1>
      <NavLink to="orders/create" className="text-center font-bold text-blue-10 underline mt-5">
        Create Order Now
      </NavLink>
    </div>
  );
};

export default Home;
