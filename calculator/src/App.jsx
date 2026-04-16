import { useReducer, useEffect, useRef, useState } from "react";
import "./App.css";
import CalculatorButton from "./components/CalculatorButton";
import { ACTIONS } from "./shared/constants";
import { reducer } from "./entities/reduser";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {});
  const { currentOperand, previousOperand, operation } = state;

  const waterRef = useRef(null);
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (waterRef.current) {
        waterRef.current.style.left = e.clientX + "px";
        waterRef.current.style.top = e.clientY + "px";
      }

      const newDrop = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setDrops((prev) => [...prev, newDrop]);

      setTimeout(() => {
        setDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={waterRef} className="water-ripple"></div>

      {drops.map((drop) => (
        <div
          key={drop.id}
          className="water-drop"
          style={{
            left: drop.x + "px",
            top: drop.y + "px",
          }}
        />
      ))}

      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand}
            {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>

        <CalculatorButton
          value="AC"
          spanTwo={true}
          dispatch={dispatch}
          type={ACTIONS.CLEAR}
        />

        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>

        <CalculatorButton
          value="/"
          type={ACTIONS.CHOOSE_OPERATION}
          dispatch={dispatch}
        />

        <CalculatorButton
          value="1"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="2"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="3"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />

        <CalculatorButton
          value="*"
          type={ACTIONS.CHOOSE_OPERATION}
          dispatch={dispatch}
        />

        <CalculatorButton
          value="4"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="5"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="6"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />

        <CalculatorButton
          value="+"
          type={ACTIONS.CHOOSE_OPERATION}
          dispatch={dispatch}
        />

        <CalculatorButton
          value="7"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="8"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="9"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />

        <CalculatorButton
          value="-"
          type={ACTIONS.CHOOSE_OPERATION}
          dispatch={dispatch}
        />

        <CalculatorButton
          value="."
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />
        <CalculatorButton
          value="0"
          dispatch={dispatch}
          type={ACTIONS.ADD_DIGIT}
        />

        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    </>
  );
};

export default App;
