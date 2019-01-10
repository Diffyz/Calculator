import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./reducer/reducer_calculator";
import { PreloaderComponent } from "./preloader";

ReactDOM.render(
  <Provider store={store}>
    <PreloaderComponent />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
