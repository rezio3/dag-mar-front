import React from "react";
import "../style/navbarMobile.scss";
import burgerIcon from "../img/burger-icon.svg";
import type { NavbarProps } from "./Navbar";
import { NavLink } from "react-router-dom";
import { url } from "../url";

const NavbarMobile: React.FC<NavbarProps> = ({
  burgerActive,
  setBurgerActive,
}) => {
  const handleBurgerBtn = () => {
    setBurgerActive(!burgerActive);
  };
  return (
    <div className="m-navigation-contaier m-nav-up" id="m-nav">
      <NavLink
        to={url.home}
        end
        className="m-logo-img m-logo-up"
        id="m-logo"
      ></NavLink>
      <div className="burger-icon-container">
        {burgerActive ? (
          <img
            src={burgerIcon}
            alt="Nagivation burger icon"
            onClick={handleBurgerBtn}
          />
        ) : (
          <img
            src={burgerIcon}
            alt="Nagivation burger icon"
            onClick={handleBurgerBtn}
          />
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
