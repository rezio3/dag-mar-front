import { useState } from "react";
import "../../style/opinions.scss";
import Opinion from "./Opinions/Opinion";
import OpinionSegments from "./Opinions/opinionSegment";
import Media from "react-media";

const Opinions = () => {
  const opinionsData = [
    {
      opinionText: `Pełen profesjonalizm! Bardzo miła obsługa, świetna komunikacja e-mailowa. Szybka realizacja tłumaczeń, ceny atrakcyjne. Wiele razy korzystałam i BARDZO polecam!`,
      author: `ILONA`,
    },
    {
      opinionText: `Nasza firma jest bardzo zadowolona ze współpracy z biurem Pani Dagmary. Tłumaczeniasą wykonywane szybko i profesjonalnie, zarówno standardowe jak i techniczne. Ceny są bardzo konkurencyjne w porównaniu z innymi biurami tłumaczeniowymi. Nie ma problemu z kontaktem z Panią Dagmarą, odpowiada nawet będąc na urlopie za co dziękujemy i jednocześnie przepraszamy za zakłócenia urlopowe :) Biuro godne polecenia na 100%!`,
      author: `JOLANTA KASZA`,
    },
    {
      opinionText: `Korzystanie z usług DAG-MAR to Wygoda. Świetny kontakt przez telefon, e-mail oraz sms; dostępność w drodze wyjątku nawet poza godzinami pracy; czas realizacji i terminowość - wszystko na wysokim poziomie i z uśmiechem. Jakość tłumaczeń świetna oraz przy stałej współpracy bardzo dobre ceny i czas realizacji. Wielkie Dzięki, a to już kilkanaście lat współpracy.`,
      author: `BMW TO PASJA`,
    },
    {
      opinionText:
        'W biurze tłumaczeń przysięgłych "DAG-MAR" już wielu raz zamawiałem tłumaczenie dokumentów różnych typów i zawsze byłem zadowolony od jakości i podejścia do sprawy tak samo jak i od podejścia do klienta. Jeżeli będę mieć kolejną potrzebę w tłumaczeniu to mój wybór jest oczywisty, bezwzględnie polecam biuro tłumaczeń przysięgłych "DAG-MAR".',
      author: `OLEKSANDR DOROSHCHUK`,
    },
    {
      opinionText:
        "Pierwszy raz korzystałem z usług pani Dagmary ale wszystkim będę polecał, pełen profesjonalizm, a w gratisie...miła obsługa :-) Pani Dagmaro, jeszcze raz dziękuję.",
      author: `TOMASZ BLASZKIEWICZ (TEBE)`,
    },
    {
      opinionText: `Gorąco polecam. Nie pierwszy raz moja rodzina korzysta z usług Biura Tłumaczeń Przysięgłych DAG-MAR. Tłumaczenia zawsze wykonywane są terminowo i profesjonalnie. Przyjazne podejście do klientów.`,
      author: `Тетяна Дорощук`,
    },
    {
      opinionText: `Tłumaczenia wykonane z wielką starannością, telefoniczny i bezpośredni kontakt z tłumaczem wzorowy. Trudny i obszerny przekład zrealizowany w krótkim czasie. Polecam!`,
      author: `MARCIN MROZEK`,
    },
    {
      opinionText: `Dwa razy korzystałam z usług biura Dag-Mar (tłumaczenie przysięgłe i zwykle) i nie mam żadnych zastrzeżen. Zawsze terminowo, kontakt mailowy bardzo szybki, bardzo mila i fachowa obsługa klienta. Dziękuję!`,
      author: `JUSTYNA KOWALSKA`,
    },
  ];

  type OpinionsState = {
    activeOpinion: number[];
    currentView: number;
    rightArrowOn: boolean;
    leftArrowOn: boolean;
    whichArrow: 0 | 1;
  };
  const [opinion, setOpinion] = useState<OpinionsState>({
    activeOpinion: [0],
    currentView: 1,
    rightArrowOn: true,
    leftArrowOn: true,
    whichArrow: 1,
  });

  const handleLeftArrow = () => {
    const nextOpinionArrPush =
      opinion.activeOpinion[0] !== 0 ? opinion.activeOpinion[0] - 1 : 7;
    const newArr = opinion.activeOpinion;
    newArr.unshift(nextOpinionArrPush);

    let tempCurrentView = null;
    if (opinion.currentView === 1) {
      tempCurrentView = 8;
    } else {
      tempCurrentView = opinion.currentView - 1;
    }

    setOpinion({
      ...opinion,
      activeOpinion: newArr,
      leftArrowOn: false,
      currentView: tempCurrentView,
      whichArrow: 0,
    });

    setTimeout(() => {
      if (opinion.activeOpinion[1] === 0) {
        setOpinion({
          ...opinion,
          activeOpinion: [7],
          leftArrowOn: true,
          currentView: tempCurrentView,
          whichArrow: 0,
        });
      } else {
        setOpinion({
          ...opinion,
          activeOpinion: [nextOpinionArrPush],
          leftArrowOn: true,
          currentView: tempCurrentView,
          whichArrow: 0,
        });
      }
    }, 600);
  };

  const handleRightArrow = () => {
    const nextOpinionArrPush =
      opinion.activeOpinion[0] !== 7 ? opinion.activeOpinion[0] + 1 : 0;

    const newArr = opinion.activeOpinion;
    newArr.push(nextOpinionArrPush);

    let tempCurrentView = null;
    if (opinion.currentView === 8) {
      tempCurrentView = 1;
    } else {
      tempCurrentView = opinion.currentView + 1;
    }

    setOpinion({
      ...opinion,
      activeOpinion: newArr,
      rightArrowOn: false,
      currentView: tempCurrentView,
      whichArrow: 1,
    });

    setTimeout(() => {
      if (opinion.activeOpinion[0] === 8) {
        setOpinion({
          ...opinion,
          activeOpinion: [1],
          rightArrowOn: true,
          currentView: tempCurrentView,
          whichArrow: 1,
        });
      } else {
        setOpinion({
          ...opinion,
          activeOpinion: [nextOpinionArrPush],
          rightArrowOn: true,
          currentView: tempCurrentView,
          whichArrow: 1,
        });
      }
    }, 600);
  };

  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            // Desktop
            <div className="opinions-container-0">
              <div className="opinions-container">
                <h2 className="opinions-header">Co mówią o nas klienci?</h2>
                <div className="carousel-container">
                  <div
                    className="carousel-left-arrow carousel-arrow"
                    onClick={opinion.leftArrowOn ? handleLeftArrow : undefined}
                  >
                    <div
                      className="material-symbols-outlined left-arrow arrow"
                      id="scroll-btn"
                    ></div>
                  </div>
                  <div
                    className="opinions-description"
                    id="opinions-description"
                  >
                    <div
                      className="opinions-description2"
                      id="opinions-description2"
                    >
                      {opinion.activeOpinion.map((e, index) => {
                        return (
                          <Opinion
                            opinionText={opinionsData[e].opinionText}
                            opinionAuthor={opinionsData[e].author}
                            key={e}
                            anim={(() => {
                              if (opinion.whichArrow === 1) {
                                if (opinion.activeOpinion.length === 2) {
                                  if (index === 0) {
                                    return "opinion-container swipe-to-left";
                                  } else {
                                    return "opinion-container swipe-from-right";
                                  }
                                } else if (opinion.activeOpinion.length === 1) {
                                  return "opinion-container swipe-from-right";
                                }
                              } else {
                                if (opinion.activeOpinion.length === 2) {
                                  if (index === 0) {
                                    return "opinion-container swipe-from-left";
                                  } else {
                                    return "opinion-container swipe-to-right";
                                  }
                                } else if (opinion.activeOpinion.length === 1) {
                                  return "opinion-container swipe-from-left";
                                }
                              }
                            })()}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="carousel-right-arrow carousel-arrow"
                    onClick={
                      opinion.rightArrowOn ? handleRightArrow : undefined
                    }
                  >
                    <div
                      className="material-symbols-outlined right-arrow arrow"
                      id="scroll-btn"
                    ></div>
                  </div>
                </div>
                <div className="segments-container">
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 1 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 2 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 3 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 4 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 5 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 6 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 7 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 8 ? "#6c6c6c" : null,
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            // Mobile
            <div className="opinions-container-0">
              <div className="opinions-container">
                <h2 className="opinions-header">
                  Co mówią o nas <br />
                  klienci?
                </h2>
                <div className="carousel-container">
                  <div
                    className="opinions-description"
                    id="opinions-description"
                  >
                    <div
                      className="opinions-description2"
                      id="opinions-description2"
                    >
                      {opinion.activeOpinion.map((e, index) => {
                        return (
                          <Opinion
                            opinionText={opinionsData[e].opinionText}
                            opinionAuthor={opinionsData[e].author}
                            key={e}
                            anim={(() => {
                              if (opinion.whichArrow === 1) {
                                if (opinion.activeOpinion.length === 2) {
                                  if (index === 0) {
                                    return "opinion-container swipe-to-left";
                                  } else {
                                    return "opinion-container swipe-from-right";
                                  }
                                } else if (opinion.activeOpinion.length === 1) {
                                  return "opinion-container swipe-from-right";
                                }
                              } else {
                                if (opinion.activeOpinion.length === 2) {
                                  if (index === 0) {
                                    return "opinion-container swipe-from-left";
                                  } else {
                                    return "opinion-container swipe-to-right";
                                  }
                                } else if (opinion.activeOpinion.length === 1) {
                                  return "opinion-container swipe-from-left";
                                }
                              }
                            })()}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="arrows-container">
                  <div
                    className="m-carousel-left-arrow m-carousel-arrow"
                    onClick={opinion.leftArrowOn ? handleLeftArrow : undefined}
                  >
                    <div className="m-left-arrow m-arrow" id="scroll-btn"></div>
                  </div>
                  <div
                    className="m-carousel-right-arrow m-carousel-arrow"
                    onClick={
                      opinion.rightArrowOn ? handleRightArrow : undefined
                    }
                  >
                    <div
                      className="m-right-arrow m-arrow"
                      id="scroll-btn"
                    ></div>
                  </div>
                </div>
                <div className="segments-container">
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 1 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 2 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 3 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 4 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 5 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 6 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 7 ? "#6c6c6c" : null,
                    }}
                  />
                  <OpinionSegments
                    style={{
                      backgroundColor:
                        opinion.currentView === 8 ? "#6c6c6c" : null,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default Opinions;
