import plus from "../../img/plus.svg";
import Media from "react-media";

const Question3 = (props: any) => {
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
                <span>1. Tłumaczenie przysięgłe:</span>
                <ul>
                  <li>
                    W przypadku tłumaczeń przysięgłych, tłumacz przysięgły musi
                    mieć dostęp do oryginału dokumentu, aby dokładnie
                    przetłumaczyć treść i poświadczyć tłumaczenie.
                  </li>
                  <li>
                    Oryginał jest potrzebny, aby upewnić się, że tłumaczenie
                    jest zgodne z zawartością dokumentu źródłowego.
                  </li>
                  <li>
                    Tłumacz przysięgły może sporządzić tłumaczenie na podstawie
                    oryginału lub jego kopii, ale w obu przypadkach musi mieć
                    dostęp do pełnej treści dokumentu. W przypadku tłumaczenia z
                    kopii lub skanu w poświadczeniu zawierana jest taka
                    informacja.
                  </li>
                  <li>
                    W przypadku dobrej jakości skanu czy kopii możemy podjąć się
                    tłumaczenia ale oryginalne dokumenty musimy obejrzeć przy
                    obiorze tłumaczenia.
                  </li>
                </ul>
                <span>2. Tłumaczenie zwykłe:</span>
                <ul>
                  <li>
                    W przypadku tłumaczeń zwykłych, oryginał dokumentu nie jest
                    zawsze wymagany.
                  </li>
                  <li>
                    Tłumacz zwykły może pracować na podstawie kopii dokumentu
                    lub przekazanych mu informacji.
                  </li>
                  <li>
                    Tłumaczenia zwykłe mogą być wykonywane na podstawie tekstu
                    źródłowego bez konieczności posiadania oryginału.
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
                <span>1. Tłumaczenie przysięgłe:</span>
                <ul>
                  <li>
                    W przypadku tłumaczeń przysięgłych, tłumacz przysięgły musi
                    mieć dostęp do oryginału dokumentu, aby dokładnie
                    przetłumaczyć treść i poświadczyć tłumaczenie.
                  </li>
                  <li>
                    Oryginał jest potrzebny, aby upewnić się, że tłumaczenie
                    jest zgodne z zawartością dokumentu źródłowego.
                  </li>
                  <li>
                    Tłumacz przysięgły może sporządzić tłumaczenie na podstawie
                    oryginału lub jego kopii, ale w obu przypadkach musi mieć
                    dostęp do pełnej treści dokumentu. W przypadku tłumaczenia z
                    kopii lub skanu w poświadczeniu zawierana jest taka
                    informacja.
                  </li>
                  <li>
                    W przypadku dobrej jakości skanu czy kopii możemy podjąć się
                    tłumaczenia ale oryginalne dokumenty musimy obejrzeć przy
                    obiorze tłumaczenia.
                  </li>
                </ul>
                <span>2. Tłumaczenie zwykłe:</span>
                <ul>
                  <li>
                    W przypadku tłumaczeń zwykłych, oryginał dokumentu nie jest
                    zawsze wymagany.
                  </li>
                  <li>
                    Tłumacz zwykły może pracować na podstawie kopii dokumentu
                    lub przekazanych mu informacji.
                  </li>
                  <li>
                    Tłumaczenia zwykłe mogą być wykonywane na podstawie tekstu
                    źródłowego bez konieczności posiadania oryginału.
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

export default Question3;
