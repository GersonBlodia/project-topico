 
import "./InputDesing.css";

export const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

 