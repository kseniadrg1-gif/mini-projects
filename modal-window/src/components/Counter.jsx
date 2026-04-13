import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <span>{count}</span>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
