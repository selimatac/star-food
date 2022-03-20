import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { MenuIcon } from "@heroicons/react/outline";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/actions/themeActions";

const SidebarMenu = ({ title, data }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.theme.isShow);
  const handleResize = () => {
    window.innerWidth < 1024 && open === true && dispatch(toggleMenu(false));
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.innerWidth < 1024 && dispatch(toggleMenu(false));
  }, [location]);

  return (
    <ClickAwayListener
      onClickAway={() =>
        window.innerWidth < 1024 && open === true && dispatch(toggleMenu(false))
      }
    >
      <div className={`sidebar-menu ${open ? "active" : ""}`}>
        <h2 className="sidebar-menu__title">{title}</h2>
        <div className="sidebar-menu__list">
          {data?.map((x, i) => (
            <NavLink
              to={`list/${x.param}`}
              key={i}
              state={{ title: x.title }}
              className="sidebar-menu__list-item"
            >
              {x.title}
              <span className="sidebar-menu__list-item-count">{x.count}</span>
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          className="sidebar-menu__toggle"
          onClick={() => dispatch(toggleMenu(!open))}
        >
          <MenuIcon className="w-6 text-black" />
        </button>
      </div>
    </ClickAwayListener>
  );
};

SidebarMenu.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default SidebarMenu;
