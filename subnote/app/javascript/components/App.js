import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import styles from "./App.module.css";

const loginNav = (
  <nav className={styles.loginSignupContainer}>
    <NavLink
      to="/login"
      className={({ isActive }) =>
        styles.navButton + (isActive ? " " + styles.activePage : "")
      }
    >
      <p>Login</p>
      <div className={styles.fillInGap}></div>
    </NavLink>
    <NavLink
      to="/signup"
      className={({ isActive }) =>
        styles.navButton + (isActive ? " " + styles.activePage : "")
      }
    >
      <p>Sign Up</p>
      <div className={styles.fillInGap}></div>
    </NavLink>
  </nav>
);
function App(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={
            <div className={styles.mainDiv}>
              <div className={styles.containerContainer}>
                {loginNav}
                <Login />
              </div>
            </div>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <div className={styles.mainDiv}>
              <div className={styles.containerContainer}>
                {loginNav}
                <Signup />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

App.propTypes = {};

export default App;
