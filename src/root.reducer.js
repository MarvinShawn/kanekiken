import { combineReducers } from "redux";
import { homePageReducer } from "./home";
import { categoryPageReducer, singleCategoryProductsReducer } from "./category";

export const rootReducer = combineReducers({
  homePageReducer,
  categoryPageReducer,
  singleCategoryProductsReducer
});
