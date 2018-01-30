import { combineEpics } from "redux-observable";
import { homePageEpics } from "./home";
export const rootEpic = combineEpics(homePageEpics);
