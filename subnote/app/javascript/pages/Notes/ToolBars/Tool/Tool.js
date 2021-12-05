import React from "react";
import PropTypes from "prop-types";
import styles from "./Tool.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tool(props) {
  const currentTool = props.type === props.currentTool;
  return (
    <div
      onClick={(e) => props.setCurrentTool(props.type)}
      className={[styles.mainDiv, currentTool ? styles.active : null].join(" ")}
    >
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </div>
  );
}

Tool.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.object,
  setCurrentTool: PropTypes.func,
  currentTool: PropTypes.string,
};

export default Tool;
