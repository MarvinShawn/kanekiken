import { combineEpics } from "redux-observable";
import { homePageEpics } from "./home";
import { categoryPageEpics } from "./category";
export const rootEpic = combineEpics(homePageEpics, categoryPageEpics);
