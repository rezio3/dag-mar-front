import React from "react";
import "../style/navbarMobile.scss";
import burgerIcon from "../img/burger-icon.svg";
import type { NavbarProps } from "./Navbar";

const NavbarMobile: React.FC<NavbarProps> = ({
  burgerActive,
  setBurgerActive,
}) => {
  const handleBurgerBtn = () => {
    setBurgerActive(!burgerActive);
  };
  return (
    <div className="m-navigation-contaier m-nav-up" id="m-nav">
      <div className="m-logo-img m-logo-up" id="m-logo"></div>
      <div className="burger-icon-container">
        {burgerActive ? (
          <img src={burgerIcon} onClick={handleBurgerBtn} />
        ) : (
          <img src={burgerIcon} onClick={handleBurgerBtn} />
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
