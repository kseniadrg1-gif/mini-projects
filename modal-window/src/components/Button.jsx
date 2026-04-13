export const Button = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(true);
  };

  return <button onClick={handleOpen}>Открыть</button>;
};
