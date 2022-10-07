import React from "react";

const Button = ({ label, onClick }) => {
  return <input type="button" value={label} onClick={onClick} />;
};

export default Button;
