import React from "react";
import { NavLink } from "react-router-dom";
import "../style/MenuInBurgerIcon.scss";
import xImg from "../img/burgerMenuX.svg";
import type { NavbarProps } from "./Navbar";

const MenuInBurgerIcon: React.FC<NavbarProps> = (props) => {
  const handleClick = () => {
    props.setBurgerActive(false);
  };
  return (
    <div className="burger-nav-content">
      <div className="x-container">
        <img src={xImg} className="x-button" onClick={handleClick} />
      </div>
      <div className="buttons-container">
        <NavLink to="/" end className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">O nas</button>
          </div>
        </NavLink>
        <NavLink to="/offer" className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">Oferta</button>
          </div>
        </NavLink>
        <NavLink to="/fortranslators" className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">Dla tłumaczy</button>
          </div>
        </NavLink>
        <NavLink to="/faq" className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-faq m-navbtn">FAQ</button>
          </div>
        </NavLink>
        {/* <div className="languages-container">
					<span className="m-navbtn">PL</span>
					<span className="material-symbols-outlined">expand_more</span>
				</div> */}
        <NavLink to="/contact" className="m-nav-btn-desktop">
          <button className="m-contact-button" onClick={handleClick}>
            Skontaktuj się
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuInBurgerIcon;
