import React from "react";
import { NavLink } from "react-router-dom";
import "../style/MenuInBurgerIcon.scss";
import xImg from "../img/burgerMenuX.svg";
import type { NavbarProps } from "./Navbar";
import { url } from "../url";

const MenuInBurgerIcon: React.FC<NavbarProps> = (props) => {
  const handleClick = () => {
    props.setBurgerActive(false);
  };
  return (
    <div className="burger-nav-content">
      <div className="x-container">
        <img
          src={xImg}
          alt="zamknij menu"
          className="x-button"
          onClick={handleClick}
        />
      </div>
      <div className="buttons-container">
        <NavLink to={url.home} end className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">O nas</button>
          </div>
        </NavLink>
        <NavLink to={url.offer} className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">Oferta</button>
          </div>
        </NavLink>
        <NavLink to={url.forTranslators} className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">Dla tłumaczy</button>
          </div>
        </NavLink>
        {/* <NavLink to={url.forTranslators} className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-navbtn">Korepetycje j. angielski</button>
          </div>
        </NavLink> */}
        <NavLink to={url.faq} className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-faq m-navbtn">FAQ</button>
          </div>
        </NavLink>
        <NavLink to={`${url.contact}#platnosci`} className="m-nav-btn-desktop">
          <div className="button-container" onClick={handleClick}>
            <button className="m-faq m-navbtn">Płatności</button>
          </div>
        </NavLink>
        <NavLink
          to="https://g.page/r/CbDi03cXppgWEB0/review"
          className="m-nav-btn-desktop"
        >
          <div className="button-container" onClick={handleClick}>
            <button className="m-faq m-navbtn">Oceń nas</button>
          </div>
        </NavLink>
        <NavLink to={url.contact} className="m-nav-btn-desktop">
          <button className="m-contact-button" onClick={handleClick}>
            Skontaktuj się
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuInBurgerIcon;
