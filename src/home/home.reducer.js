import { handleActions } from "redux-actions";

import {
  // 轮播图
  FETCH_BANNER,
  GET_BANNER,
  GET_BANNER_ERROR,
  // 产品列表
  FETCH_PRODUCT_LIST,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_ERROR
} from "./home.constants";

const initialState = {
  productList: [],
  productListError: "",
  bannerList: [],
  bannerListError: ""
};

export const homePageReducer = handleActions(
  {
    // 产品列表
    [FETCH_PRODUCT_LIST]: state => ({
      ...state,
      isPending: true
    }),
    [GET_PRODUCT_LIST]: (state, { payload }) => ({
      ...state,
      productList: payload
    }),
    [GET_PRODUCT_LIST_ERROR]: (state, { payload }) => ({
      ...state,
      productListError: payload
    }),

    // 轮播图
    [FETCH_BANNER]: state => ({
      ...state,
      isPending: true
    }),
    [GET_BANNER]: (state, { payload }) => ({
      ...state,
      bannerList: payload
    }),
    [GET_BANNER_ERROR]: (state, { payload }) => ({
      ...state,
      bannerListError: payload
    })
  },
  initialState
);
