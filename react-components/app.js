import { Button } from "./button/index.js";

const rootNode = document.getElementById("root");

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Button, null),
    "Hello, React!"
  );
};

ReactDOM.render(React.createElement(App, null), rootNode);
