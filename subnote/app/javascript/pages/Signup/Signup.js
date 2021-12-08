import React from "react";
import PropTypes from "prop-types";
import styles from "../Pages.module.css";
import { useState } from "react/cjs/react.development";
import axios from "../../handlers/axios";
import { useNavigate } from "react-router-dom";




function Signup(props) {
    const navigate = useNavigate();
    const [signupCredentials, setSignupCredentials] = useState({
        signupFirstName:"", 
        signupLastName:"", 
        signupEmail:"", 
        signupPassword:"", 
        signupConfirmPassword:"",
    });

    function signupClicked(){
        if(signupCredentials.signupPassword === signupCredentials.signupConfirmPassword){
            axios
            .post("/api/v1/users", {
                firstName: signupCredentials.signupFirstName,
                lastName: signupCredentials.signupLastName,
                email: signupCredentials.signupEmail,
                password: signupCredentials.signupPassword,
                confirmPassword: signupCredentials.signupConfirmPassword,
            })
            .then((res) => {
                if(res.status === 201){
                    navigate("/notes");
                } else{
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } else{
            alert("Your passwords do not match");
        }
        
    }

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
                    onChange={(e) =>
                        setSignupCredentials((previous) => {
                          let newCredentials = { ...previous };
                          newCredentials.signupFirstName = e.target.value;
                          return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>

                <label htmlFor="signupLname" className={styles.loginStuff}>
                    Last Name
                </label>
                <input
                    type="text"
                    id="signupLname"
                    onChange={(e) =>
                        setSignupCredentials((previous) => {
                          let newCredentials = { ...previous };
                          newCredentials.signupLastName = e.target.value;
                          return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>

                <label htmlFor="signupEmail" className={styles.loginStuff}>
                    Email
                </label>
                <input
                    type="text"
                    id="signupEmail"
                    onChange={(e) =>
                        setSignupCredentials((previous) => {
                          let newCredentials = { ...previous };
                          newCredentials.signupEmail = e.target.value;
                          return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>

                <label htmlFor="signupPassword" className={styles.loginStuff}>
                    Password
                </label>
                <input
                    type="password"
                    id="signupPassword"
                    onChange={(e) =>
                        setSignupCredentials((previous) => {
                          let newCredentials = { ...previous };
                          newCredentials.signupPassword = e.target.value;
                          return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>

                <label
                    htmlFor="signupConfPassword"
                    className={styles.loginStuff}
                >
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="signupConfPassword"
                    onChange={(e) =>
                        setSignupCredentials((previous) => {
                          let newCredentials = { ...previous };
                          newCredentials.signupConfirmPassword = e.target.value;
                          return newCredentials;
                        })
                    }
                    className={styles.loginStuff}
                ></input>
                <br></br>
                <button onClick={signupClicked}>Sign Up</button>
            </div>
        </div>
    );
}

Signup.propTypes = {};

export default Signup;
