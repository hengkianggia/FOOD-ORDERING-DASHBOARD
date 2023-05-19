import React from "react";

const Card = (props) => {
  return (
    <div className={`rounded-md p-5 overflow-hidden ${props.className}`}>{props.children}</div>
  );
};

export default Card;
