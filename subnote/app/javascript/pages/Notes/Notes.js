import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import styles from "./Notes.module.css";
function Notes(props) {
    return (
        <div className={styles.mainDiv}>
            <Header />
        </div>
    );
}

Notes.propTypes = {};

export default Notes;
