import "../style/offer.scss";
import OfferSection from "./offerComponents/OfferSection";
import OfferRedSection from "./offerComponents/OfferRedSection";

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-header-container">
        <h2 className="offer-header">Oferta</h2>
        <h3 className="offer-header h3">
          Profesjonalne tłumaczenia w językach europejskich i nie tylko
        </h3>
      </div>
      <span className="offer-header-below">
        Potrzebują Państwo rzetelnego tłumaczenia z języka angielskiego,
        niemieckiego lub innego języka europejskiego, a może pozaeuropejskiego?
        Biuro tłumaczeń DAG-MAR w Lubinie służy fachową pomocą. Oferujemy
        przekłady wykonywane przez doświadczonych tłumaczy, z zachowaniem pełnej
        dokładności i dbałości o kontekst kulturowy. Tłumaczymy między innymi z
        i na języki: angielski, niemiecki, czeski, francuski, hiszpański,
        niderlandzki, włoski, słowacki, ukraiński, grecki, a także z chiński,
        arabski czy japoński. Każde zlecenie wyceniamy indywidualnie,
        dopasowując ofertę do rodzaju dokumentu i terminu realizacji.
      </span>
      <OfferSection />
      <OfferRedSection />
    </div>
  );
};

export default Offer;
