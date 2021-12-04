import React from "react";
import PropTypes from "prop-types";
import styles from "../Pages.module.css";

function Signup(props) {
    return (
        <div>
            <div className={styles.loginContainer}>
                <h1 className={styles.LoginHeader}>Sign Up</h1>
                <label htmlFor="signupFname" className={styles.loginStuff}>
                    First Name
                </label>
                <input
                    type="text"
                    id="signupFname"
                    className={styles.loginStuff}
                ></input>

                <label htmlFor="signupLname" className={styles.loginStuff}>
                    Last Name
                </label>
                <input
                    type="text"
                    id="signupLname"
                    className={styles.loginStuff}
                ></input>

                <label htmlFor="signupEmail" className={styles.loginStuff}>
                    Email
                </label>
                <input
                    type="text"
                    id="signupEmail"
                    className={styles.loginStuff}
                ></input>

                <label htmlFor="signupPassword" className={styles.loginStuff}>
                    Password
                </label>
                <input
                    type="text"
                    id="signupPassword"
                    className={styles.loginStuff}
                ></input>

                <label
                    htmlFor="signupConfPassword"
                    className={styles.loginStuff}
                >
                    Confirm Password
                </label>
                <input
                    type="text"
                    id="signupConfPassword"
                    className={styles.loginStuff}
                ></input>
                <br></br>
                <button>Sign Up</button>
            </div>
        </div>
    );
}

Signup.propTypes = {};

export default Signup;
