import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../Pages.module.css";

function Login(props) {
    const [credentials, setCredentials] = useState({
        loginEmail: "",
        loginPassword: "",
    });
    function loginClicked() {
        console.log(credentials)
    }
    return (
        <div>
            <div className={styles.loginContainer}>
                <h1 className={styles.LoginHeader}>Login</h1>
                <label htmlFor="loginEmail" className={styles.loginStuff}>
                    Email
                </label>
                <input
                    type="text"
                    value={credentials.loginEmail}
                    onChange={(e) =>
                        setCredentials((previous) => {
                            let newCredentials = { ...previous };
                            newCredentials.loginEmail = e.target.value;
                            return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>
                <label htmlFor="loginPassword" className={styles.loginStuff}>
                    Password
                </label>
                <input
                    type="password"
                    value={credentials.loginPassword}
                    onChange={(e) =>
                        setCredentials((previous) => {
                            let newCredentials = { ...previous };
                            newCredentials.loginPassword = e.target.value;
                            return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>
                <br></br>
                <button onClick={loginClicked}>Login</button>
            </div>
        </div>
    );
}

Login.propTypes = {};

export default Login;
