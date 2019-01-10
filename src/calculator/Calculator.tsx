import * as React from "react";

import { DispatchToProps, StateToProps } from "src/interfaces";
import { Button } from "src/buttons/Button";
import { options } from "src/constants";

import "./calculator.css";

export class Calculator extends React.Component<
  DispatchToProps & StateToProps,
  any
> {
  public render() {
    return (
      <div className="container">
        <input value={this.props.result} disabled />
        {options.map(x => (
          <Button
            key={x}
            value={x}
            setOperand={this.props.setOperand}
            setCondition={this.props.setCondition}
            result={this.props.result}
            equal={this.props.equal}
            clear={this.props.clear}
          />
        ))}
      </div>
    );
  }
}
