import React, { forwardRef } from "react";
import styles from "./input.module.css";
import PropTypes from "prop-types";

const errorMessageSwitch = (errorType) => {
  switch (errorType) {
    case "required":
      return "This field is required.";
    case "maxLength":
      return "This field cannot be longer than 15 characters.";
    case "minLength":
      return "This field must be longer than 3 characters.";

    default:
      return "Error";
  }
};

const Input = forwardRef(
  (
    {
      style,
      error,
      type = "text",
      onChange,
      onKeyUp,
      value,
      placeholder,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <input
          style={{
            margin: `${error ? "0" : ""}`,
            color: `${error ? "rgb(255, 80, 80)" : ""}`,
          }}
          className={`${className ? className : ""} ${styles.search}`}
          type={type}
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={value}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {error ? (
          <span className={styles.error}>
            {errorMessageSwitch(error.type)}{" "}
          </span>
        ) : null}
      </>
    );
  }
);

Input.propsTypes = {
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    ref: PropTypes.node,
  }),
};

export default Input;
