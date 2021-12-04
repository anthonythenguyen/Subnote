import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import svg from "../../assets/images/logo.svg";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";

function Home(props) {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.landingHeader}>
                    <Logo />
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.center}>
                    <object type="image/svg+xml" data={svg}></object>
                </div>
            </div>
            <div>
                <div className={styles.center}>
                    <Link to="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {};

export default Home;
