import { useReducer } from "react";
import "./App.css";
import CalculatorButton from "./components/CalculatorButton";
import { ACTIONS } from "./shared/constants";
import { reducer } from "./entities/reduser";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {});

  const { currentOperand, previousOperand, operation } = state;

  return (
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
  );
};

export default App;
