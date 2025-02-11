import React from "react";
import "./ButtonDesing.css";

export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

 