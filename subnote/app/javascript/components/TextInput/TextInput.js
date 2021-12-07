import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.css";

function TextInput(props) {
  return <input type="text" {...props}></input>;
}

TextInput.propTypes = {};

export default TextInput;
