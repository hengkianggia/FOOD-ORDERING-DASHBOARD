import React from "react";

const Button = ({ text, className, onClick, type }) => {
  return (
    <>
      <button
        className={`px-4 py-2 bg-white rounded-sm hover:bg-gray-100 transition-all ${className}`}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
