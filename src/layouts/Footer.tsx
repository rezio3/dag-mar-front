import { NavLink } from "react-router-dom";
import "../style/footer.scss";
import footerLogo from "../img/footer-logo.svg";
import fbIcon from "../img/FacebookIcon.svg";
import googleIcon from "../img/GoogleIcon.svg";
import Media from "react-media";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
                <span>Copyright &copy; {currentYear} DAG-MAR</span>
                <div className="icons-footer-container">
                  <a
                    href="https://www.facebook.com/dagmartlumaczenia"
                    target="_blank"
                  >
                    <img src={fbIcon} alt="Facebook Icon" className="icon" />
                  </a>
                  <a
                    href="https://www.google.com/search?q=Biuro+T%C5%82umacze%C5%84+Przysi%C4%99g%C5%82ych+DAG-MAR+S.C.&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s6TqQclGEexZdc5LVg68GWZ9ggSRwjTMIS6amwsi-q8-9IJsr-k1oGFofugNSa6WhIxNEw0%3D&uds=AOm0WdGX4_QpCLns5p-tTuq4Oz-CIqfGyE7KmPo2-p5dF8voR7axXW4e3FoKTF4M0timg1a8D9kZ7T5w8SpTqpYfWuOEvOh6d10fwyQJOI0Kn2xxYIZeFu_ZIZbHzWARN6HGIr78Z3BSePrfav6m2tojm4CxI6uanQ"
                    target="_blank"
                  >
                    <img src={googleIcon} alt="Google Icon" className="icon" />
                  </a>
                </div>
                <NavLink to="/policy" className="policy-link">
                  <span>Polityka prywatności</span>
                </NavLink>
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
                  <a
                    href="https://www.facebook.com/dagmartlumaczenia"
                    target="_blank"
                  >
                    <img src={fbIcon} alt="Facebook Icon" className="icon" />
                  </a>
                  <a
                    href="https://www.google.com/search?q=Biuro+T%C5%82umacze%C5%84+Przysi%C4%99g%C5%82ych+DAG-MAR+S.C.&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s6TqQclGEexZdc5LVg68GWZ9ggSRwjTMIS6amwsi-q8-9IJsr-k1oGFofugNSa6WhIxNEw0%3D&uds=AOm0WdGX4_QpCLns5p-tTuq4Oz-CIqfGyE7KmPo2-p5dF8voR7axXW4e3FoKTF4M0timg1a8D9kZ7T5w8SpTqpYfWuOEvOh6d10fwyQJOI0Kn2xxYIZeFu_ZIZbHzWARN6HGIr78Z3BSePrfav6m2tojm4CxI6uanQ"
                    target="_blank"
                  >
                    <img src={googleIcon} alt="Google Icon" className="icon" />
                  </a>
                </div>
                <NavLink to="/policy" className="policy-link">
                  <span>Polityka prywatności</span>
                </NavLink>
                <span>Copyright &copy; {currentYear} DAG-MAR</span>
              </div>
            </footer>
          );
        }}
      </Media>
    </>
  );
};

export default Footer;
