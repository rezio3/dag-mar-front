import { useState } from "react";
import Media from "react-media";
import "../../style/payments.scss";
import plus from "../../img/plus.svg";

type PaymentsKeys = "line1Active" | "line2Active" | "line3Active";

const Payments = () => {
  const [paymentsView, setPaymentsView] = useState<
    Record<PaymentsKeys, boolean>
  >({
    line1Active: false,
    line2Active: false,
    line3Active: false,
  });

  const handlePlusClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    const lineClicked = target.id as PaymentsKeys;
    setPaymentsView({
      ...paymentsView,
      [lineClicked]: !paymentsView[lineClicked],
    });
  };

  const { line1Active, line2Active, line3Active } = paymentsView;

  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <div className="payments-container">
              <h2>Płatności</h2>
              <div
                className={"line1 linePayments"}
                style={line1Active ? { height: "240px" } : { height: "80px" }}
              >
                <div className="visible-line">
                  <span className="visible-span-text">
                    Biuro Tłumaczeń Przysięgłych DAG-MAR Dagmara Toporowska
                  </span>
                  <img
                    src={plus}
                    className={
                      line1Active
                        ? "material-symbols-outlined plus rotate"
                        : "material-symbols-outlined plus"
                    }
                    id="line1Active"
                    onClick={handlePlusClick}
                  />
                </div>
                <div className="unvisible-line">
                  <p>
                    Nr konta: <b>33 1140 2017 0000 4402 1131 7627</b>
                    <br />
                    Kod BIC/SWIFT mBanku: BREXPLPWMBK
                    <br /> mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING)
                    LODZ
                  </p>
                  <p>
                    Skrytka pocztowa 2108
                    <br /> 90-959 Łódź 2
                  </p>
                </div>
              </div>
              <div
                className={"line2 linePayments"}
                style={line2Active ? { height: "380px" } : { height: "80px" }}
              >
                <div className="visible-line">
                  <span className="visible-span-text">
                    Biuro Tłumaczeń Przysięgłych DAG-MAR S.C.
                  </span>
                  <img
                    src={plus}
                    className={
                      line2Active
                        ? "material-symbols-outlined plus rotate"
                        : "material-symbols-outlined plus"
                    }
                    id="line2Active"
                    onClick={handlePlusClick}
                  />
                </div>
                <div className="unvisible-line">
                  <p>
                    Nr konta: <b>49 1140 2004 0000 3602 8195 3937</b>
                    <br />
                    Kod BIC/SWIFT mBanku: BREXPLPWMBK
                    <br />
                    mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ
                    <br />
                    Skrytka pocztowa 2108
                    <br />
                    90-959 Łódź 2
                  </p>
                  <div>
                    <p>
                      <span>
                        Dane niezbędne przy dokonywaniu płatności z zagranicy:
                      </span>
                      <br />
                      <span>Nr konta: 49 1140 2004 0000 3602 8195 3937</span>
                      <br />
                      <span>
                        Nazwa firmy w przypadku przelewu na rachunek firmowy:
                      </span>
                      <br />
                      Biuro Tłumaczeń Przysięgłych DAG-MAR S.C. lub Biuro
                      Tłumaczeń Przysięgłych „DAG-MAR” Dagmara Toporowska
                      <br />
                      <span>Adres odbiorcy przelewu: </span>ul. Karkonoska 1C,
                      59-300 Lubin
                      <br />
                      <span>Tytuł przelewu: </span>Faktura nr…
                      <br />
                      <span>Kod BIC/SWIFT mBanku: </span>BREXPLPWMBK
                      <br />
                      <span>Nazwa i adres banku odbiorcy przelewu: </span>mBank
                      S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ, Skrytka
                      pocztowa 2108, 90-959 Łódź 2
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={"line3 linePayments"}
                style={line3Active ? { height: "340px" } : { height: "80px" }}
              >
                <div className="visible-line">
                  <span className="visible-span-text">
                    Instrukcja płatności
                  </span>
                  <img
                    src={plus}
                    className={
                      line3Active
                        ? "material-symbols-outlined plus rotate"
                        : "material-symbols-outlined plus"
                    }
                    id="line3Active"
                    onClick={handlePlusClick}
                  />
                </div>
                <div className="unvisible-line">
                  <p>
                    <b>
                      Dane niezbędne przy dokonywaniu płatności z zagranicy:
                    </b>
                    <br />
                    Nr konta jak powyżej (w zależności z której działalności
                    wystawiona została faktura)
                    <br />
                    <b>Nazwa firmy w przypadku przelewu na rachunek:</b>
                    <br />
                    Biuro Tłumaczeń Przysięgłych DAG-MAR S.C. lub Biuro
                    Tłumaczeń Przysięgłych DAG-MAR Dagmara Toporowska
                    <br />
                    <b>Adres odbiorcy przelewu: </b>ul. Karkonoska 1C, 59-300
                    Lubin Skrytka pocztowa 2108
                    <br />
                    <b>Tytuł przelewu: </b>Faktura nr…
                    <br />
                    <b>Kod BIC/SWIFT mBanku: </b>BREXPLPWMBK
                    <br />
                    <b>Nazwa i adres banku odbiorcy przelewu: </b>mBank S.A.
                    FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ, Skrytka
                    pocztowa 2108, 90-959 Łódź 2
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Mobile
            <div className="payments-container">
              <h2>Płatności</h2>
              <div
                className={"line1 linePayments"}
                style={line1Active ? { height: "300px" } : { height: "80px" }}
              >
                <div className="visible-line">
                  <span className="visible-span-text">
                    Biuro Tłumaczeń Przysięgłych <br />
                    DAG-MAR Dagmara Toporowska
                  </span>
                  <img
                    src={plus}
                    className={
                      line1Active
                        ? "material-symbols-outlined plus rotate"
                        : "material-symbols-outlined plus"
                    }
                    id="line1Active"
                    onClick={handlePlusClick}
                  />
                </div>
                <div className="unvisible-line">
                  <p>
                    Nr konta: <b>33 1140 2017 0000 4402 1131 7627</b>
                    <br />
                    Kod BIC/SWIFT mBanku: BREXPLPWMBK
                    <br /> mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING)
                    LODZ
                  </p>
                  <p>
                    Skrytka pocztowa 2108
                    <br /> 90-959 Łódź 2
                  </p>
                </div>
              </div>
              <div
                className={"line2 linePayments"}
                style={line2Active ? { height: "280px" } : { height: "80px" }}
              >
                <div className="visible-line">
                  <span className="visible-span-text">
                    Biuro Tłumaczeń Przysięgłych <br />
                    DAG-MAR S.C.
                  </span>
                  <img
                    src={plus}
                    className={
                      line2Active
                        ? "material-symbols-outlined plus rotate"
                        : "material-symbols-outlined plus"
                    }
                    id="line2Active"
                    onClick={handlePlusClick}
                  />
                </div>
                <div className="unvisible-line">
                  <p>
                    Nr konta: <b>49 1140 2004 0000 3602 8195 3937</b>
                    <br />
                    Kod BIC/SWIFT mBanku: BREXPLPWMBK
                    <br />
                    mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ
                    <br />
                    Skrytka pocztowa 2108
                    <br />
                    90-959 Łódź 2
                  </p>
                </div>
              </div>
              <div
                className={"line3 linePayments"}
                style={line3Active ? { height: "560px" } : { height: "80px" }}
              >
                <div className="visible-line">
                  <span className="visible-span-text">Instrukcja przelewu</span>
                  <img
                    src={plus}
                    className={
                      line3Active
                        ? "material-symbols-outlined plus rotate"
                        : "material-symbols-outlined plus"
                    }
                    id="line3Active"
                    onClick={handlePlusClick}
                  />
                </div>
                <div className="unvisible-line">
                  <p>
                    <b>
                      Dane niezbędne przy dokonywaniu płatności z zagranicy:
                    </b>
                    <br />
                    Nr konta jak powyżej (w zależności z której działalności
                    wystawiona została faktura)
                    <br />
                    <b>Nazwa firmy w przypadku przelewu na rachunek:</b>
                    <br />
                    Biuro Tłumaczeń Przysięgłych DAG-MAR S.C. lub Biuro
                    Tłumaczeń Przysięgłych DAG-MAR Dagmara Toporowska
                    <br />
                    <b>Adres odbiorcy przelewu: </b>ul. Karkonoska 1C, 59-300
                    Lubin Skrytka pocztowa 2108
                    <br />
                    <b>Tytuł przelewu: </b>Faktura nr…
                    <br />
                    <b>Kod BIC/SWIFT mBanku: </b>BREXPLPWMBK
                    <br />
                    <b>Nazwa i adres banku odbiorcy przelewu: </b>mBank S.A.
                    FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ, Skrytka
                    pocztowa 2108, 90-959 Łódź 2
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default Payments;
