export const useClickButton = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);
  return { count, handleClick };
};
