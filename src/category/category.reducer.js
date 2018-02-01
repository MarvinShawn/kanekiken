import { handleActions } from "redux-actions";
import {
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_ERROR,
  REINITAIL_CATEGORY_PRODUCTS
} from "./category.constants";

const intialState = {
  categoryList: [],
  categoryListError: "",
  isPending: false
};

const productResultsIntialState = {
  totalPage: 1,
  productList: [],
  productListError: ""
};

export const categoryPageReducer = handleActions(
  {
    [GET_CATEGORY]: (state, { payload }) => ({
      ...state,
      categoryList: payload
    }),
    [GET_CATEGORY_ERROR]: (state, { payload }) => ({
      ...state,
      categoryListError: payload
    })
  },
  intialState
);

export const singleCategoryProductsReducer = handleActions(
  {
    [GET_CATEGORY_PRODUCTS]: (state, { payload }) => ({
      ...state,
      productList: state.productList.concat(payload.items),
      totalPage: payload.total_page
    }),
    [GET_CATEGORY_PRODUCTS_ERROR]: (state, { payload }) => ({
      ...state,
      productListError: payload
    }),
    [REINITAIL_CATEGORY_PRODUCTS]: state => ({
      ...state,
      productList: [],
      productListError: "",
      totalPage: 1
    })
  },
  productResultsIntialState
);
