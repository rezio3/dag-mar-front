import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

const NavbarDesktop = () => {
  return (
    <div className="navigation-contaier nav-up" id="nav">
      <div className="left-navbar">
        <NavLink to="/" end className="nav-btn-desktop">
          <button className="navbtn">O nas</button>
        </NavLink>
        <NavLink to="/offer" className="nav-btn-desktop">
          <button className="navbtn">Oferta</button>
        </NavLink>
        <NavLink to="/fortranslators" className="nav-btn-desktop">
          <button className="navbtn">Dla tłumaczy</button>
        </NavLink>
      </div>

      <NavLink to="/" end className="logo-img logo-up" id="logo"></NavLink>
      <div className="right-navbar">
        <NavLink to="/faq" className="nav-btn-desktop">
          <button className="faq navbtn">FAQ</button>
        </NavLink>
        {/* <div className="language-btn">
          <div className="only-btn">
            <span>PL</span>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
          <div className="language-choice-window">
            <span className="eng-span">English</span>
            <span className="de-span">Deutsch</span>
          </div>
        </div> */}
        <NavLink to="/contact" className="nav-btn-desktop">
          <button className="contact-button">Skontaktuj się</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarDesktop;
