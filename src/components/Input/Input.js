import React from "react";
import styles from "./input.module.css"

function Input({ type, onChange, onKeyUp, id, value, placeholder, className}) {
  return (
    <input
    className= {`${ className ? className : ""  } ${styles.search}` }
      type={type}
      onChange={onChange}
      onKeyUp={onKeyUp}
      id={id}
      value={value}
      placeholder= {placeholder}
    />
  );
}

export default Input;
