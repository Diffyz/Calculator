import { Calculator } from "./calculator/Calculator";
import { connect } from "react-redux";
import { CalculatorState, StateToProps, DispatchToProps } from "./interfaces";
import { SET_OPERAND, SET_CONDITION, CLEAR, EQUAL } from "./reducer-actions";

const mapStateToProps = (state: CalculatorState): StateToProps => {
  return {
    result: state.result
  };
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => ({
  setOperand: value => dispatch({ type: SET_OPERAND, value }),
  setCondition: value => dispatch({ type: SET_CONDITION, value }),
  clear: () => dispatch({ type: CLEAR }),
  equal: () => dispatch({ type: EQUAL })
});

export const PreloaderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
