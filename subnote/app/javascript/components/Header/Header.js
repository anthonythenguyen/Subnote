import React from "react";
import PropTypes from "prop-types";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./Header.module.css";

function Header(props) {
    return (
        <div className={styles.mainDiv}>
            <Hamburger />
            <div className={styles.logo}>
                <Logo small />
            </div>
        </div>
    );
}

Header.propTypes = {};

export default Header;
