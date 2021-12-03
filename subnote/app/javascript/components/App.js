import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";

function App(props) {
  return (
    <div>
      <Header />
      <div>Helllo World</div>
    </div>
  );
}

App.propTypes = {};

export default App;
