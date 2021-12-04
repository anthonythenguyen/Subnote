import React from "react";
import PropTypes from "prop-types";
import styles from "./Logo.module.css";

function Logo(props) {
    return (
        <div className={styles.logoContainer}>
            <h1 className={styles.Logo}>[{props.small ? "sn" : "subnote"}]</h1>
        </div>
    );
}

Logo.propTypes = {};

export default Logo;
