import React from "react";
import PropTypes from "prop-types";
import styles from "./ToolBar.module.css";

function ToolBar(props) {
  return (
    <div className={styles.mainDiv + (props.col ? " " + styles.column : "")}>
      {props.children}
    </div>
  );
}

ToolBar.propTypes = {};

export default ToolBar;
