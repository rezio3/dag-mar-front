import "../style/offer.scss";
import OfferSection from "./offerComponents/OfferSection";
import OfferRedSection from "./offerComponents/OfferRedSection";

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-header-container">
        <h2 className="offer-header">Oferta</h2>
        <h3 className="offer-header h3">Co wchodzi w skład wyceny?</h3>
      </div>
      <OfferSection />
      <OfferRedSection />
    </div>
  );
};

export default Offer;
