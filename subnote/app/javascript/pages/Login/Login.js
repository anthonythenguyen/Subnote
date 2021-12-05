import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../Pages.module.css";
import axios from "../../handlers/axios";

function Login(props) {
  const [credentials, setCredentials] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  function loginClicked() {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    axios
      .post("/api/v1/login", null, {
        params: {
          email: credentials.loginEmail,
          password: credentials.loginPassword,
        },
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          "content-type": "text/json",
          "X-CSRF-Token": csrf,
        },
      })
      .then((res) => {
        if (res.status !== 200) {
          document.cookie = "Secure; jwt=Bearer " + res.data;
        }
      });
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
