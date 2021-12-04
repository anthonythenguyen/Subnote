import React from "react";
import PropTypes from "prop-types";
import styles from "../Pages.module.css";

function Login(props) {
    return (
        <div>
            <div className={styles.loginContainer}>
                <h1 className={styles.LoginHeader}>Login</h1>
                <label htmlFor="loginEmail" className={styles.loginStuff}>
                    Email
                </label>
                <input
                    type="text"
                    id="loginEmail"
                    className={styles.loginStuff}
                ></input>
                <label htmlFor="loginPassword" className={styles.loginStuff}>
                    Password
                </label>
                <input
                    type="text"
                    id="loginPassword"
                    className={styles.loginStuff}
                ></input>
                <br></br>
                <button>Login</button>
            </div>
        </div>
    );
}

Login.propTypes = {};

export default Login;
