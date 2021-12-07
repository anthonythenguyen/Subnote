import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={styles.button + (props.small ? " " + styles.small : "")}
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {};

export default Button;
