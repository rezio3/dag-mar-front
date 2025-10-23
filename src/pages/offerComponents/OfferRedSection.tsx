import { NavLink } from "react-router-dom";
import "../../style/redSection.scss";
import Media from "react-media";

const OfferRedSection = () => {
  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <div className="red-section-container">
              <h2>Masz więcej pytań?</h2>
              <span>
                Chętnie rozwiejemy wszelkie wątpliwości związane z wykonywaniem{" "}
                <strong>tłumaczeń</strong> w naszym biurze.
                <br /> Zachęcamy do skontaktowania się z nami poprzez formularz
                kontaktowy, do którego prowadzi poniższy przycisk.
              </span>
              <NavLink to="/contact" className="nav-btn-desktop">
                <button className="write-us-btn">Napisz do nas</button>
              </NavLink>
            </div>
          ) : (
            <div className="red-section-container">
              <h2>Masz więcej pytań?</h2>
              <span>
                Chętnie rozwiejemy wszelkie wątpliwości związane z wykonywaniem{" "}
                <strong>tłumaczeń</strong> w naszym biurze. Zachęcamy do
                skontaktowania się z nami poprzez formularz kontaktowy, do
                którego prowadzi poniższy przycisk.
              </span>
              <NavLink to="/contact" className="nav-btn-desktop">
                <button className="write-us-btn">Napisz do nas</button>
              </NavLink>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default OfferRedSection;
