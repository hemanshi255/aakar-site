import React from "react";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`button button-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
