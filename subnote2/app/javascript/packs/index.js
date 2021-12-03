import ReactDOM from "react-dom";

function Index(props) {
  return <h1>Hello World</h1>;
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement("div"))
  );
});
