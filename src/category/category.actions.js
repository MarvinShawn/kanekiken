import { createAction } from "redux-actions";
import {
  FETCH_CATEGORY,
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  FETCH_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_ERROR,
  REINITAIL_CATEGORY_PRODUCTS
} from "./category.constants";

export const fetchCategory = createAction(FETCH_CATEGORY);
export const getCategory = createAction(GET_CATEGORY);
export const getCategoryError = createAction(GET_CATEGORY_ERROR);

export const fetchCategoryProducts = createAction(FETCH_CATEGORY_PRODUCTS);
export const getCategoryProducts = createAction(GET_CATEGORY_PRODUCTS);
export const getCategoryProductsError = createAction(
  GET_CATEGORY_PRODUCTS_ERROR
);

export const reInitailSingleCategoryProducts = createAction(
  REINITAIL_CATEGORY_PRODUCTS
);
