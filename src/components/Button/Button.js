import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({
  text,
  children,
  type,
  style,
  className,
  width,
  height,
  border,
  radius,
  bgColor,
  color,
  onClick,
  padding,
  margin,
  ...properties
}) {
  return (
    <button
      onClick={onClick}
      style={{
        style,
        className,
        width,
        height,
        border,
        borderRadius: radius,
        backgroundColor: bgColor,
        padding,
        margin,
        color,
      }}
      className={className || styles.button}
      type={type}
      {...properties}
    >
      {children ? children : text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  text: "Login",
};
