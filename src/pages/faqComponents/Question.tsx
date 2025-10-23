import plus from "../../img/plus.svg";
import Media from "react-media";

const Question = (props: any) => {
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
              <div className="unvisible-line">
                <span>{props.header.res}</span>
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
                    ? { height: "fit-content" }
                    : { height: "0px" }
                }
              >
                <span>{props.header.res}</span>
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default Question;
