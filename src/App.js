import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./root.store";
import { App } from "./main";

export default () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
