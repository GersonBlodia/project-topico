import React from "react";
import "./Select.css";

export const SelectDesing = ({ options, value, onChange }) => {
  return (
    <select className="custom-select" value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
 