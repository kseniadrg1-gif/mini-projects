import { evaluate } from "../metods";
import { ACTIONS } from "../../shared/constants";

export function reducer(state, { type, payload }) {
  const { operation, currentOperand, previousOperand } = state;

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.value === "0" && currentOperand === "0") return state;
      if (payload.value === "." && currentOperand?.includes(".")) return state;

      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.value}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (!currentOperand) return state;
      if (currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: currentOperand.slice(0, -1),
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (!currentOperand) return state;
      if (previousOperand != null && operation != null) {
        const result = evaluate(state);
        return {
          currentOperand: null,
          operation: payload.value,
          previousOperand: result,
        };
      }
      return {
        currentOperand: null,
        operation: payload.value,
        previousOperand: currentOperand,
      };

    case ACTIONS.EVALUATE:
      if (Object.values (state).some(el =>!el) return state)

    default:
      return state;
  }
}
