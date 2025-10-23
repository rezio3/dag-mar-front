import "../../style/values.scss";

const Values = () => {
  return (
    <section className="values-we-offer-container" id="section2">
      <h3>Nasze wartości</h3>
      <div className="values-box">
        <div className="value value1">
          <div className="value-one value-img"></div>
          <span>Rzetelność</span>
        </div>
        <div className="value value2 exper">
          <div className="value-two value-img"></div>
          <span className="upper-span">Doświadczenie</span>
        </div>
        <div className="value value3">
          <div className="value-three value-img"></div>
          <span>Profesjonalizm</span>
        </div>
        <div className="value value4">
          <div className="value-four value-img"></div>
          <span className="lower-span">Terminowość</span>
        </div>
        <div className="value value5">
          <div className="value-five value-img"></div>
          <span>Partnerstwo</span>
        </div>
      </div>
    </section>
  );
};

export default Values;
