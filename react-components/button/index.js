import { useClickButton } from "./hooks.js";

export const Button = () => {
  const { count, handleClick } = useClickButton();

  return <button onClick={handleClick}>You clicked {count} times!</button>;
  // return React.createElement(
  //   "button",
  //   {
  //     onClick: handleClick,
  //   },
  //   `You clicked ${count} times!`
  // );
};
