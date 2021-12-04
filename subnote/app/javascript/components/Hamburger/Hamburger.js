import React from "react";
import PropTypes from "prop-types";
import styles from "./Hamburger.module.css";

function Hamburger(props) {
    return (
        <div className={styles.mainDiv}>
            <div>
                <div className={styles.hamburger}></div>
                <div className={styles.hamburger}></div>
                <div className={styles.hamburger}></div>
            </div>
        </div>
    );
}

Hamburger.propTypes = {};

export default Hamburger;
