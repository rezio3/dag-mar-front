import { NavLink } from "react-router-dom";
import "../style/navbar.scss";
import { url } from "../url";

const NavbarDesktop = () => {
  return (
    <div className="navigation-contaier nav-up" id="nav">
      <div className="left-navbar">
        <NavLink to={url.home} end className="nav-btn-desktop">
          <button className="navbtn">O nas</button>
        </NavLink>
        <NavLink to={url.offer} className="nav-btn-desktop">
          <button className="navbtn">Oferta</button>
        </NavLink>
        <NavLink to={url.forTranslators} className="nav-btn-desktop">
          <button className="navbtn">Dla tłumaczy</button>
        </NavLink>
      </div>

      <NavLink
        to={url.home}
        end
        className="logo-img logo-up"
        id="logo"
      ></NavLink>
      <div className="right-navbar">
        {/* <NavLink to={url.forTranslators} className="nav-btn-desktop">
          <button className="navbtn">Korepetycje j. angielski</button>
        </NavLink> */}
        <NavLink to={url.faq} className="nav-btn-desktop">
          <button className="faq navbtn">FAQ</button>
        </NavLink>
        <NavLink to={url.contact} className="nav-btn-desktop">
          <button className="contact-button">Skontaktuj się</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarDesktop;
