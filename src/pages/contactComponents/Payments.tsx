import { useState } from "react";
import Media from "react-media";
import "../../style/payments.scss";
import plus from "../../img/plus.svg";

type PaymentsKeys = "line1Active" | "line2Active";

const Payments = () => {
  const [paymentsView, setPaymentsView] = useState<
    Record<PaymentsKeys, boolean>
  >({
    line1Active: false,
    line2Active: false,
  });

  const handlePlusClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    const lineClicked = target.id as PaymentsKeys;
    setPaymentsView({
      ...paymentsView,
      [lineClicked]: !paymentsView[lineClicked],
    });
  };

  const { line1Active, line2Active } = paymentsView;

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
                style={line2Active ? { height: "340px" } : { height: "80px" }}
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
                    Biuro Tłumaczeń Przysięgłych DAG-MAR S.C.
                    <br />
                    ul. Karkonoska 1C, 59-300 Lubin
                    <br />
                    mBank – Bankowość Detaliczna
                    <br />
                    49 1140 2004 0000 3602 8195 3937
                  </p>
                  <div>
                    <p>
                      <span>
                        Dane niezbędne przy dokonywaniu płatności z zagranicy:
                      </span>
                      <br />
                      <span>Nr konta: </span>PL49 1140 2004 0000 3602 8195 3937
                      <br />
                      <span>
                        Nazwa firmy w przypadku przelewu na rachunek firmowy:
                      </span>
                      <br />
                      Biuro Tłumaczeń Przysięgłych DAG-MAR S.C.
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
                      <br />
                      <span>SORT CODE/numer rozliczeniowy: </span>11402004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Mobile
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
                style={line2Active ? { height: "760px" } : { height: "80px" }}
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
                    Biuro Tłumaczeń Przysięgłych DAG-MAR S.C.
                    <br />
                    ul. Karkonoska 1C, 59-300 Lubin
                    <br />
                    mBank – Bankowość Detaliczna
                    <br />
                    49 1140 2004 0000 3602 8195 3937
                  </p>
                  <div>
                    <p>
                      <span>
                        Dane niezbędne przy dokonywaniu płatności z zagranicy:
                      </span>
                      <br />
                      <span>Nr konta: </span>PL49 1140 2004 0000 3602 8195 3937
                      <br />
                      <span>
                        Nazwa firmy w przypadku przelewu na rachunek firmowy:
                      </span>
                      <br />
                      Biuro Tłumaczeń Przysięgłych DAG-MAR S.C.
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
                      <br />
                      <span>SORT CODE/numer rozliczeniowy: </span>11402004
                    </p>
                  </div>
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
