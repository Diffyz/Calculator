import * as React from "react";
import { digits, conditions, equals, resetData } from "src/constants";

import { DispatchToProps, StateToProps, ButtonState } from "src/interfaces";

import "./style.css";

export class Button extends React.Component<
  DispatchToProps & StateToProps & ButtonState,
  DispatchToProps
> {
  private setOperand = (value: React.ReactText) => () => {
    if (digits.findIndex(x => x === value) >= 0) {
      this.props.setOperand(value);
    } else if (conditions.findIndex(x => x === value) >= 0) {
      this.props.setCondition(value);
    } else if (equals === value) {
      this.props.equal();
    } else if (value === resetData) {
      this.props.clear();
    }
  };
  render(): React.ReactNode {
    return (
      <button
        key={this.props.value}
        onClick={this.setOperand(this.props.value)}
      >
        {this.props.value}
      </button>
    );
  }
}
