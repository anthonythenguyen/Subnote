import React from "react";
import PropTypes from "prop-types";
import styles from "./Spinner.module.css";

function Spinner(props) {
    return (
        <div>
            <div className={styles.multiSpinnerContainer}>
                <div className={styles.multiSpinner}>
                    <div className={styles.multiSpinner}>
                        <div className={styles.multiSpinner}>
                            <div className={styles.multiSpinner}>
                                <div className={styles.multiSpinner}>
                                    <div className={styles.multiSpinner}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Spinner.propTypes = {};

export default Spinner;
