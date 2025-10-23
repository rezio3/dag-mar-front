import plus from "../../img/plus.svg";
import Media from "react-media";

const Question2 = (props: any) => {
  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <div
              className={
                props.state[props.stateLine] ? "line line-active" : "line"
              }
              id={props.stateLine}
              style={
                props.state[props.stateLine]
                  ? { height: props.header.height }
                  : { height: "80px" }
              }
            >
              <div className="visible-line">
                <span className="visible-span-text">{props.header.quest}</span>
                <img
                  src={plus}
                  className={
                    props.state[props.stateLine]
                      ? "material-symbols-outlined plus rotate"
                      : "material-symbols-outlined plus"
                  }
                  id={props.stateLine}
                  onClick={props.handler}
                />
              </div>
              <div
                className="unvisible-line"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span>{props.header.res}</span>
                <span>1. Status tłumacza:</span>
                <ul>
                  <li>
                    Tłumacz zwykły: Może wykonywać tłumaczenia bez specjalnych
                    uprawnień. Jego zadaniem jest przekładanie tekstów, rozmów
                    lub innych treści na inny język. Nie posiada pieczęci ani
                    przysięgi.
                  </li>
                  <li>
                    Tłumacz przysięgły: Wykonuje tłumaczenia pod przysięgą. Musi
                    posiadać specjalne uprawnienia i potwierdzającą je pieczęć.
                    Jego praca ma wartość urzędową i jest wymagana w przypadku
                    dokumentów o charakterze prawnym, takich jak akty urodzenia,
                    umowy czy pisma urzędowe.
                  </li>
                </ul>
                <span>2. Przysięga:</span>
                <ul>
                  <li>
                    Tłumacze przysięgli składają przysięgę, w której zobowiązują
                    się do przestrzegania określonych standardów i przepisów.
                    Ich tłumaczenia mają moc prawną i są uwierzytelniane
                    specjalną pieczęcią.
                  </li>
                  <li>
                    Tłumacze zwykli nie składają przysięgi i nie ponoszą takiej
                    odpowiedzialności prawnej.
                  </li>
                </ul>
                <span>3. Rodzaj dokumentów:</span>
                <ul>
                  <li>
                    Tłumaczenia przysięgłe są często wymagane w przypadku
                    dokumentów o charakterze prawnym, takich jak akty urodzenia,
                    małżeństwa, zgonu, dokumenty pojazdu sprowadzonego zza
                    granicy, świadectwa ukończenia szkoły, akt własności,
                    testamenty, faktury i inne pisma urzędowe.
                  </li>
                  <li>
                    Tłumaczenia zwykłe mogą dotyczyć mniej oficjalnych potrzeb,
                    takich jak przekład książki, artykułu czy instrukcji
                    obsługi.
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="line" id={props.stateLine}>
              <div className="visible-line">
                <span className="visible-span-text">{props.header.quest}</span>
                <img
                  src={plus}
                  className={
                    props.state[props.stateLine]
                      ? "material-symbols-outlined plus rotate"
                      : "material-symbols-outlined plus"
                  }
                  id={props.stateLine}
                  onClick={props.handler}
                />
              </div>
              <div
                className={
                  props.state[props.stateLine]
                    ? "unvisible-line line-active"
                    : "unvisible-line"
                }
                style={
                  props.state[props.stateLine]
                    ? {
                        height: "fit-content",
                        display: "flex",
                        flexDirection: "column",
                      }
                    : {
                        height: "0px",
                        display: "flex",
                        flexDirection: "column",
                      }
                }
              >
                <span>{props.header.res}</span>
                <span>1. Status tłumacza:</span>
                <ul>
                  <li>
                    Tłumacz zwykły: Może wykonywać tłumaczenia bez specjalnych
                    uprawnień. Jego zadaniem jest przekładanie tekstów, rozmów
                    lub innych treści na inny język. Nie posiada pieczęci ani
                    przysięgi.
                  </li>
                  <li>
                    Tłumacz przysięgły: Wykonuje tłumaczenia pod przysięgą. Musi
                    posiadać specjalne uprawnienia i potwierdzającą je pieczęć.
                    Jego praca ma wartość urzędową i jest wymagana w przypadku
                    dokumentów o charakterze prawnym, takich jak akty urodzenia,
                    umowy czy pisma urzędowe.
                  </li>
                </ul>
                <span>2. Przysięga:</span>
                <ul>
                  <li>
                    Tłumacze przysięgli składają przysięgę, w której zobowiązują
                    się do przestrzegania określonych standardów i przepisów.
                    Ich tłumaczenia mają moc prawną i są uwierzytelniane
                    specjalną pieczęcią.
                  </li>
                  <li>
                    Tłumacze zwykli nie składają przysięgi i nie ponoszą takiej
                    odpowiedzialności prawnej.
                  </li>
                </ul>
                <span>3. Rodzaj dokumentów:</span>
                <ul>
                  <li>
                    Tłumaczenia przysięgłe są często wymagane w przypadku
                    dokumentów o charakterze prawnym, takich jak akty urodzenia,
                    małżeństwa, zgonu, dokumenty pojazdu sprowadzonego zza
                    granicy, świadectwa ukończenia szkoły, akt własności,
                    testamenty, faktury i inne pisma urzędowe.
                  </li>
                  <li>
                    Tłumaczenia zwykłe mogą dotyczyć mniej oficjalnych potrzeb,
                    takich jak przekład książki, artykułu czy instrukcji
                    obsługi.
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default Question2;
