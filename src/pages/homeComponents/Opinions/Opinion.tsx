import React from "react";
type OpinionProps = {
  anim: string | undefined;
  opinionAuthor: string;
  opinionText: string;
};
const Opinion1: React.FC<OpinionProps> = ({
  anim,
  opinionAuthor,
  opinionText,
}) => {
  return (
    <div className={anim} id="Opinion1">
      <p className="opinion">{opinionText}</p>
      <span className="author">{opinionAuthor}</span>
    </div>
  );
};

export default Opinion1;
