export const Modal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div>
          <h1>Модальное окно</h1>
          <button onClick={handleClose}>Закрыть</button>
        </div>
      )}
    </>
  );
};
