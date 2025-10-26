import "../../style/whoTrustedUs.scss";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/lxpantos.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import logo6 from "../../img/logo6.png";
import logo7 from "../../img/logo7.png";
import logo8 from "../../img/logo8.png";
import logo9 from "../../img/logo9.png";
import logo10 from "../../img/logo10.png";
import logo11 from "../../img/logo11.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
];

const WhoTrustedUs = () => {
  return (
    <div className="who-trusted-us-container">
      <h1 className="who-trusted-us-header">Zaufali nam</h1>
      <div className="trusted-logos">
        <div className="trusted-logos-track">
          {/* powielamy loga dwa razy, by animacja była płynna */}
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoTrustedUs;
