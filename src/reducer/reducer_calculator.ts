import { SET_OPERAND, SET_CONDITION, EQUAL, CLEAR } from "src/reducer-actions";
import { CalculatorState } from "src/interfaces";
import { createStore } from "redux";
import { setOperand, setCondition, getResult, clearInput } from "src/actions";

const calculatorInitialState: CalculatorState = {
  leftOperand: "",
  rightOperand: "",
  condition: "",
  result: ""
};

const reducer = (
  state = calculatorInitialState,
  action: any
): CalculatorState => {
  switch (action.type) {
    case SET_OPERAND:
      return setOperand(state, action.value);
    case SET_CONDITION:
      return setCondition(state, action.value);
    case EQUAL:
      return getResult(state);
    case CLEAR:
      return clearInput(state);
  }
  return state;
};

export const store = createStore(reducer);
