import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.headerText}>bruh</h1>
    </div>
  );
}

Header.propTypes = {};

export default Header;
