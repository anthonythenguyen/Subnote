import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.form}>{props.children}</div>
    </div>
  );
}

Modal.propTypes = {};

export default Modal;
