import "../../style/whoTrustedUs.scss";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import logo6 from "../../img/logo6.png";
import logo7 from "../../img/logo7.png";
import logo8 from "../../img/logo8.png";
import logo9 from "../../img/logo9.png";
import logo10 from "../../img/logo10.png";
import logo11 from "../../img/logo11.png";

const WhoTrustedUs = () => {
  return (
    <div className="who-trusted-us-container">
      <h1 className="who-trusted-us-header">Zaufali nam</h1>
      <div className="trusted-logos">
        <div className="trusted-logos-animate">
          <img src={logo1} alt="logo-kghm" className="logo" />
          <img src={logo2} alt="logo-kghm" className="logo" />
          <img src={logo3} alt="logo-kghm" className="logo" />
          <img src={logo4} alt="logo-kghm" className="logo" />
          <img src={logo5} alt="logo-kghm" className="logo" />
          <img src={logo6} alt="logo-kghm" className="logo" />
          <img src={logo7} alt="logo-kghm" className="logo" />
          <img src={logo8} alt="logo-kghm" className="logo" />
          <img src={logo9} alt="logo-kghm" className="logo" />
          <img src={logo10} alt="logo-kghm" className="logo" />
          <img src={logo11} alt="logo-kghm" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default WhoTrustedUs;
