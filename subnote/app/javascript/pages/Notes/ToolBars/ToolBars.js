import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToolBars.module.css";
import ToolBar from "./ToolBar/ToolBar";
import Tool from "./Tool/Tool";
import { faFont, faImages } from "@fortawesome/free-solid-svg-icons";
import ToolPropertySelector from "./ToolPropertySelector/ToolPropertySelector";

function ToolBars(props) {
  const [tools, setTools] = useState([
    {
      type: "text",
      icon: faFont,
      config: [
        {
          name: "color",
          type: "colorGrid",
          currentValue: "#000000",
          values: [
            "#000000",
            "#FF5C5C",
            "#008BF5",
            "#00E0A1",
            "#FDE05E",
            "#CAAAEE",
          ],
        },
        {
          name: "fontSize",
          type: "dropdown",
          currentValue: "medium",
          values: ["small", "medium", "large"],
        },
      ],
    },
  ]);
  const [currentTool, setCurrentTool] = useState(tools[0].type);

  const currentToolProperties = tools.find(
    (ele) => ele.type === currentTool
  ).config;
  function setActiveValue(newValue, property) {
    setTools((prev) => {
      let newProps = [...prev];
      newProps
        .find((ele) => ele.type === currentTool)
        .config.find((ele) => ele.name === property).currentValue = newValue;
      return [...newProps];
    });
  }
  return (
    <div className={styles.mainDiv}>
      <ToolBar>
        {tools.map((ele) => {
          return (
            <Tool
              key={ele.type}
              type={ele.type}
              icon={ele.icon}
              setCurrentTool={setCurrentTool}
              currentTool={currentTool}
            />
          );
        })}
      </ToolBar>
      <ToolBar col>
        {currentToolProperties.map((ele) => {
          return (
            <ToolPropertySelector
              key={ele.name}
              setActiveValue={setActiveValue}
              {...ele}
            />
          );
        })}
      </ToolBar>
    </div>
  );
}

ToolBars.propTypes = {};

export default ToolBars;
