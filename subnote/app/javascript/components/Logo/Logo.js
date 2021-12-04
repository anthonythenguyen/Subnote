import React from "react";
import PropTypes from "prop-types";
import styles from "./Logo.module.css";

function Logo(props) {
    return (
        <div>
            <h1 className={styles.Logo}>[subnote]</h1>
        </div>
    );
}

Logo.propTypes = {};

export default Logo;
