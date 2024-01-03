const useClickButton = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);
  return { count, handleClick };
};

export const Button = () => {
  const { count, handleClick } = useClickButton();
  return React.createElement(
    "button",
    {
      onClick: handleClick,
    },
    `You clicked ${count} times!`
  );
};
