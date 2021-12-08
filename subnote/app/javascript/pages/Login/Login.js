import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../Pages.module.css";
import axios from "../../handlers/axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [credentials, setCredentials] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);
  const navigate = useNavigate();
  function loginClicked() {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    axios
      .post("/api/v1/auth/login", {
          email: credentials.loginEmail,
          password: credentials.loginPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          setCorrectPassword(true);
          navigate("/notes");
        } else {
          setIncorrectPassword(true);
        }
      })
      .catch(() => {
        setIncorrectPassword(true);
      });
  }
  return (
    <div>
      <div className={styles.loginContainer}>
        <h1 className={styles.LoginHeader}>Login</h1>
        {incorrectPassword ? (
          <div className={styles.errorContainer}>
            <p>The email or password is incorrect</p>
          </div>
        ) : null}
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
