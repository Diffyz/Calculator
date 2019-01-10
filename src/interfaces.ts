export interface CalculatorState {
  leftOperand: string;
  rightOperand: string;
  condition: string;
  result: string;
}

export interface StateToProps {
  result: string;
}

export interface ButtonState {
  value: React.ReactText;
}

export interface DispatchToProps {
  setOperand: (value: React.ReactText) => void;
  setCondition: (value: React.ReactText) => void;
  clear: () => void;
  equal: () => void;
}
