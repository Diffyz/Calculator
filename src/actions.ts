import { CalculatorState } from "./interfaces";

const clear = (state: CalculatorState): CalculatorState => {
  (state.leftOperand = ""),
    (state.result = ""),
    (state.rightOperand = ""),
    (state.condition = "");
  return state;
};

const clearInput = (state: CalculatorState) => {
  return { ...state, state: clear(state) };
};

const setLeftOperand = (state: CalculatorState, value: string) => {
  return { ...state, leftOperand: value, result: value };
};

const setRightOperand = (state: CalculatorState, value: string) => {
  return { ...state, rightOperand: value, result: `${value} ${state.result}` };
};

const setCondition = (state: CalculatorState, value: string) => {
  return { ...state, condition: value, result: `${value} ${state.result}` };
};

const showResult = (state: any): any =>
  eval(`${state.leftOperand} ${state.condition} ${state.rightOperand}`);

const getResult = (state: CalculatorState) => {
  return { ...state, result: showResult(state) };
};

const setOperand = (state: CalculatorState, value: string) => {
  if (state.rightOperand !== "" && showResult(state) === state.result) {
    clear(state);
  }
  if (state.condition === "") {
    return setLeftOperand(state, value);
  }
  return state.leftOperand === ""
    ? setLeftOperand(state, value)
    : setRightOperand(state, value);
};

export { setOperand, getResult, setCondition, clearInput };
