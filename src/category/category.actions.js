import { createAction } from "redux-actions";
import {
  FETCH_CATEGORY,
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  FETCH_SINGLE_CATEGORY_PRODUCTS,
  FETCH_SINGLE_CATEGORY_MORE_PRODUCTS,
  GET_SINGLE_CATEGORY_PRODUCTS,
  GET_SINGLE_CATEGORY_MORE_PRODUCTS,
  GET_SINGLE_CATEGORY_PRODUCTS_ERROR,
  GET_SINGLE_CATEGORY_MORE_PRODUCTS_ERROR,
  REINITAIL_SINGLE_CATEGORY_PRODUCTS
} from "./category.constants";

export const fetchCategory = createAction(FETCH_CATEGORY);
export const getCategory = createAction(GET_CATEGORY);
export const getCategoryError = createAction(GET_CATEGORY_ERROR);

export const fetchSingleCateProducts = createAction(
  FETCH_SINGLE_CATEGORY_PRODUCTS
);
export const fetchSingleCateMoreProducts = createAction(
  FETCH_SINGLE_CATEGORY_MORE_PRODUCTS
);

export const getSingleCateProducts = createAction(GET_SINGLE_CATEGORY_PRODUCTS);
export const getSingleCateMoreProducts = createAction(
  GET_SINGLE_CATEGORY_MORE_PRODUCTS
);
export const getSingleCateProductsError = createAction(
  GET_SINGLE_CATEGORY_PRODUCTS_ERROR
);
export const getSingleCateMoreProductsError = createAction(
  GET_SINGLE_CATEGORY_MORE_PRODUCTS_ERROR
);
export const reInitailSingleCategoryProducts = createAction(
  REINITAIL_SINGLE_CATEGORY_PRODUCTS
);
