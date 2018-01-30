import { createAction } from "redux-actions";

import {
  // 产品列表
  FETCH_PRODUCT_LIST,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_ERROR,
  // 轮播图
  FETCH_BANNER,
  GET_BANNER,
  GET_BANNER_ERROR
} from "./home.constants";

export const fetchProductList = createAction(FETCH_PRODUCT_LIST);
export const getProductList = createAction(GET_PRODUCT_LIST);
export const getProductListError = createAction(GET_PRODUCT_LIST_ERROR);

export const fetchBanner = createAction(FETCH_BANNER);
export const getBanner = createAction(GET_BANNER);
export const getBannerError = createAction(GET_BANNER_ERROR);
