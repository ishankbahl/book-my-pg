import React from "react";
import { BrowserRouter } from "react-router-dom";

export const BrowserRouterWrapper = InputComponent => () => (
    <BrowserRouter>
      <InputComponent />
    </BrowserRouter>
);

const WrappedComponent = InputComponent =>
  BrowserRouterWrapper(InputComponent);

export default WrappedComponent;