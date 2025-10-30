import { useRef, useState } from "react";
import OfferInnerSection0 from "./OfferInnerSection0";
import OfferInnerSection1 from "./OfferInnerSection1";
import OfferInnerSection2 from "./OfferInnerSection2";
import OfferInnerSection3 from "./OfferInnerSection3";
import OfferInnerSection4 from "./OfferInnerSection4";
import Media from "react-media";

const OfferSection = () => {
  const [offer, setOffer] = useState(0);
  const [offerMobile, setOfferMobile] = useState({
    offer0: false,
    offer1: false,
    offer2: false,
    offer3: false,
    offer4: false,
  });
  const offers = [
    <OfferInnerSection0 />,
    <OfferInnerSection1 />,
    <OfferInnerSection2 />,
    <OfferInnerSection3 />,
    <OfferInnerSection4 />,
  ];
  const offer0Ref = useRef<HTMLDivElement>(null);
  const offer1Ref = useRef<HTMLDivElement>(null);
  const offer2Ref = useRef<HTMLDivElement>(null);
  const offer3Ref = useRef<HTMLDivElement>(null);
  const offer4Ref = useRef<HTMLDivElement>(null);
  // const refs = {
  //   offer0: offer0Ref,
  //   offer1: offer1Ref,
  //   offer2: offer2Ref,
  //   offer3: offer3Ref,
  //   offer4: offer4Ref,
  // };

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const id = target.id;
    setOffer(Number(id[id.length - 1]));
  };
  const offerSectionToDisplay = offers[offer];
  const buttonHandlerMobile = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const id = target.id as keyof typeof offerMobile; // "offer0" | "offer1" | ...

    const newState: typeof offerMobile = {
      offer0: false,
      offer1: false,
      offer2: false,
      offer3: false,
      offer4: false,
    };

    newState[id] = true;

    setOfferMobile(newState);
  };
  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <div className="offer-section-container">
              <div className="offer-section-container__left-box">
                <button
                  className={
                    offer === 0 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer0"}
                  onClick={buttonHandler}
                >
                  Języki tłumaczeń
                </button>
                <button
                  className={
                    offer === 1 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer1"}
                  onClick={buttonHandler}
                >
                  Indywidualne podejście
                </button>
                <button
                  className={
                    offer === 2 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer2"}
                  onClick={buttonHandler}
                >
                  Dokumenty standardowe
                </button>
                <button
                  className={
                    offer === 3 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer3"}
                  onClick={buttonHandler}
                >
                  Wycena dokumentów
                </button>
                <button
                  className={
                    offer === 4 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer4"}
                  onClick={buttonHandler}
                >
                  Tłumaczenia ustne
                </button>
              </div>
              {offerSectionToDisplay}
            </div>
          ) : (
            <div className="offer-section-container__left-box">
              <div
                className={
                  offerMobile.offer0
                    ? "left-box-button-container left-box-button-container__active"
                    : "left-box-button-container"
                }
                ref={offer0Ref}
              >
                <button
                  className={
                    offer === 0 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer0"}
                  onClick={(e) => {
                    buttonHandlerMobile(e);
                    buttonHandler(e);
                  }}
                >
                  Języki tłumaczeń
                </button>
                <OfferInnerSection0 />
              </div>
              <div
                className={
                  offerMobile.offer1
                    ? "left-box-button-container left-box-button-container__active"
                    : "left-box-button-container"
                }
                ref={offer1Ref}
              >
                <button
                  className={
                    offer === 1 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer1"}
                  onClick={(e) => {
                    buttonHandlerMobile(e);
                    buttonHandler(e);
                  }}
                >
                  Indywidualne podejście
                </button>
                <OfferInnerSection1 />
              </div>
              <div
                className={
                  offerMobile.offer2
                    ? "left-box-button-container left-box-button-container__active"
                    : "left-box-button-container"
                }
                ref={offer2Ref}
              >
                <button
                  className={
                    offer === 2 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer2"}
                  onClick={(e) => {
                    buttonHandlerMobile(e);
                    buttonHandler(e);
                  }}
                >
                  Dokumenty standardowe
                </button>
                <OfferInnerSection2 />
              </div>
              <div
                className={
                  offerMobile.offer3
                    ? "left-box-button-container left-box-button-container__active"
                    : "left-box-button-container"
                }
                ref={offer3Ref}
              >
                <button
                  className={
                    offer === 3 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer3"}
                  onClick={(e) => {
                    buttonHandlerMobile(e);
                    buttonHandler(e);
                  }}
                >
                  Wycena dokumentów
                </button>
                <OfferInnerSection3 />
              </div>
              <div
                className={
                  offerMobile.offer4
                    ? "left-box-button-container left-box-button-container__active"
                    : "left-box-button-container"
                }
                ref={offer4Ref}
              >
                <button
                  className={
                    offer === 4 ? "left-box-button active" : "left-box-button"
                  }
                  id={"offer4"}
                  onClick={(e) => {
                    buttonHandlerMobile(e);
                    buttonHandler(e);
                  }}
                >
                  Tłumaczenia ustne
                </button>
                <OfferInnerSection4 />
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default OfferSection;
