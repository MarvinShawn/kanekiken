import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./root.reducer";
import { rootEpic } from "./root.epic";

const getMiddleware = () => {
  const middlewares = [createEpicMiddleware(rootEpic)];
  return applyMiddleware(...middlewares);
};

export const store = createStore(rootReducer, getMiddleware());
