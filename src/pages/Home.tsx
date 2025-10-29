import "../style/home.scss";
import Stats from "./homeComponents/Stats.js";
import Values from "./homeComponents/Values.js";
import Dt from "./homeComponents/Dt.js";
import Opinions from "./homeComponents/Opinions.js";
import { useScrollTo } from "react-use-window-scroll";
import WhoTrustedUs from "./homeComponents/WhoTrustedUs.js";
import { NavLink } from "react-router-dom";

const Home = () => {
  const scrollTo = useScrollTo();
  const scrollDown = () => {
    scrollTo({
      top: 850,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-container">
      <div className="header-container">
        <div className="header-span-container">
          <h1>
            <strong>Przetłumaczymy</strong> <br />
            Twoje potrzeby
          </h1>
          <h3>
            Jeśli szukacie Państwo <strong>Tłumacza przysięgłego</strong> lub
            osoby, która przełoży tekst z języka ojczystego na{" "}
            <strong>język obcy</strong> lub odwrotnie to dobrze trafiliście. W
            naszym Biurze możecie Państwo zlecić
            <strong> tłumaczenie</strong> z niemal{" "}
            <strong>każdego języka europejskiego</strong> i nie tylko.
          </h3>
          <NavLink to="/offer" className="nav-btn-desktop">
            <button className="see-offer">Zobacz ofertę</button>
          </NavLink>
        </div>
        <div className="arrow-down-circle" onClick={scrollDown}>
          <div
            className="material-symbols-outlined arrow-down"
            id="scroll-btn"
          ></div>
        </div>
      </div>
      <Stats />
      <Dt />
      <Values />
      <Opinions />
      <div className="test"></div>
      <WhoTrustedUs />
    </div>
  );
};

export default Home;
