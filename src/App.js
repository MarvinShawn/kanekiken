import React from "react";
import { Provider } from "react-redux";
import { store } from "./root.store";
import { App } from "./main";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
