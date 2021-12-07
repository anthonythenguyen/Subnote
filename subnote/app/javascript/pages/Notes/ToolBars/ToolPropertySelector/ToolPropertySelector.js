import React from "react";
import PropTypes from "prop-types";
import styles from "./ToolPropertySelector.module.css";

function ToolPropertySelector(props) {
  const selectors = {
    colorGrid: (
      <div className={styles.mainDiv}>
        {props.values.map((ele) => {
          return (
            <div
              className={
                styles.colorOption +
                (props.currentValue === ele ? " " + styles.active : "")
              }
              key={ele}
              style={{ backgroundColor: ele }}
              onClick={() => props.setActiveValue(ele, props.name)}
            ></div>
          );
        })}
      </div>
    ),
  };
  return selectors[props.type] || null;
}

ToolPropertySelector.propTypes = {};

export default ToolPropertySelector;
