import React from "react";

const Card = (props) => {
  return (
    <div className={`rounded-md p-5 ${props.className}`}>{props.children}</div>
  );
};

export default Card;
