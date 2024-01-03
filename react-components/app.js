import { sum } from "./button";

const rootNode = document.getElementById("root");

const Button = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);
  return React.createElement(
    "button",
    {
      onClick: handleClick,
    },
    `You clicked ${count} times!`
  );
};

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Button, null),
    "Hello, React!"
  );
};

ReactDOM.render(React.createElement(App, null), rootNode);
