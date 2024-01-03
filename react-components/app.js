import { Button } from "./button/index.js";
import { getUserData } from "./helpers/index.js";

const rootNode = document.getElementById("root");

const App = () => {
  const getUserDataAsync = async () => {
    const data = await getUserData();
    console.log("data", data);
  };

  React.useEffect(() => {
    getUserDataAsync();
  }, []);

  React.useEffect(() => {
    // Example usage of Atomics.waitAsync
    const sharedBuffer = new SharedArrayBuffer(1024);
    const sharedArray = new Int32Array(sharedBuffer);

    Atomics.store(sharedArray, 0, 10);

    const result = Atomics.waitAsync(sharedArray, 0, 10);
    console.log("result", result);
  }, []);
  return React.createElement(
    "div",
    null,
    React.createElement(Button, null),
    "Hello, React!"
  );
};

ReactDOM.render(React.createElement(App, null), rootNode);
