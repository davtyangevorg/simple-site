export const Button = () => {
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
