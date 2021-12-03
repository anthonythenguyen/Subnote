import React from "react";

function index(props) {
  return <div>Hello World</div>;
}

export default index;

document.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.render(index, document.getElementById("app-root"));
});
