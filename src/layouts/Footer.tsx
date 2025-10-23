import { NavLink } from "react-router-dom";
import "../style/footer.scss";
import footerLogo from "../img/footer-logo.svg";
import fbIcon from "../img/FacebookIcon.svg";
import googleIcon from "../img/GoogleIcon.svg";
import Media from "react-media";

const Footer = () => {
  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <footer className="footer-container">
              <div className="upper-footer-container">
                <img
                  src={footerLogo}
                  alt="dag-mar logo"
                  className="footer-logo"
                />
                <div className="footer-address">
                  <h2>Biuro Tłumaczeń Przysięgłych DAG-MAR</h2>
                  <span className="footer-contact-number">+48 607 618 567</span>
                  <span>Karkonoska 1C, 59-300 Lubin</span>
                </div>
                <div className="aboutUs-offer-FAQ-translators-footer aboutUs-footer">
                  <NavLink to="/" end className="nav-btn-desktop">
                    <span className="footer-link">O nas</span>
                  </NavLink>
                  <NavLink to="/offer" className="nav-btn-desktop">
                    <span className="footer-link">Oferta</span>
                  </NavLink>
                  <NavLink to="/contact" className="nav-btn-desktop">
                    <span className="footer-link">Płatności</span>
                  </NavLink>
                </div>
                <div className="aboutUs-offer-FAQ-translators-footer">
                  <NavLink to="/fortranslators" className="nav-btn-desktop">
                    <span className="footer-link">Dla Tłumaczy</span>
                  </NavLink>
                  <NavLink to="/faq" className="nav-btn-desktop">
                    <span className="footer-link">FAQ</span>
                  </NavLink>
                </div>

                <NavLink to="/contact" className="nav-btn-desktop">
                  <button className="footer-contact-btn">Skontaktuj się</button>
                </NavLink>
              </div>
              <div className="lower-footer-container">
                <span>Copyright &copy; 2022 DAG-MAR</span>
                <div className="icons-footer-container">
                  <img src={fbIcon} alt="Facebook Icon" className="icon" />
                  <img src={googleIcon} alt="Google Icon" className="icon" />
                </div>
                <span>Polityka prywatności</span>
              </div>
            </footer>
          ) : (
            <footer className="footer-container">
              <div className="upper-footer-container">
                <div className="footer-logo-container">
                  <img
                    src={footerLogo}
                    alt="dag-mar logo"
                    className="footer-logo"
                  />
                  <div className="footer-address">
                    <h2>Biuro Tłumaczeń Przysięgłych DAG-MAR</h2>
                    <span className="footer-contact-number">
                      +48 607 618 567
                    </span>
                    <span>Karkonoska 1C, 59-300 Lubin</span>
                  </div>
                </div>
                <div className="middle-footer-container">
                  <div className="aboutUs-offer-FAQ-translators-footer aboutUs-footer">
                    <NavLink to="/" end className="nav-btn-desktop">
                      <span className="footer-link">O nas</span>
                    </NavLink>
                    <NavLink to="/offer" className="nav-btn-desktop">
                      <span className="footer-link">Oferta</span>
                    </NavLink>
                    <NavLink to="/fortranslators" className="nav-btn-desktop">
                      <span className="footer-link">Dla Tłumaczy</span>
                    </NavLink>
                  </div>
                  <div className="aboutUs-offer-FAQ-translators-footer aboutUs-right">
                    <NavLink to="/contact" className="nav-btn-desktop">
                      <span className="footer-link">Płatności</span>
                    </NavLink>

                    <NavLink to="/faq" className="nav-btn-desktop">
                      <span className="footer-link">FAQ</span>
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-btn-desktop">
                  <button className="footer-contact-btn">Skontaktuj się</button>
                </NavLink>
              </div>
              <div className="lower-footer-container">
                <div className="icons-footer-container">
                  <img src={fbIcon} alt="Facebook Icon" className="icon" />
                  <img src={googleIcon} alt="Google Icon" className="icon" />
                </div>

                <span>Polityka prywatności</span>
                <span>Copyright &copy; 2022 DAG-MAR</span>
              </div>
            </footer>
          );
        }}
      </Media>
    </>
  );
};

export default Footer;
