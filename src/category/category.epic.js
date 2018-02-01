import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import * as ActionTypes from "./category.constants";
import * as Actions from "./category.actions";
import * as ApiManager from "../api";
// 商品分类
const fetchCategoryEpic = action$ =>
  action$.ofType(ActionTypes.FETCH_CATEGORY).switchMap(action =>
    Observable.fromPromise(ApiManager.FetchCategory())
      .map(res => (res && res.data ? res.data : []))
      .flatMap(res => Observable.of(Actions.getCategory(res)))
      .catch(error => Observable.of(Actions.getCategoryError(error.message)))
  );

// 某个类型的商品
const fetchCategoryProductsEpic = action$ =>
  action$.ofType(ActionTypes.FETCH_CATEGORY_PRODUCTS).switchMap(action =>
    Observable.fromPromise(
      ApiManager.FetchSingleCategoryProduct(
        action.payload.id,
        action.payload.page
      )
    )
      .map(
        res =>
          res && res.data
            ? res.data
            : {
                items: [],
                total_page: 0,
                total_count: 0,
                page: 0,
                per_page: 0
              }
      )
      .flatMap(res => Observable.of(Actions.getCategoryProducts(res)))
      .catch(error =>
        Observable.of(Actions.getCategoryProductsError(error.message))
      )
  );

export const categoryPageEpics = combineEpics(
  fetchCategoryEpic,
  fetchCategoryProductsEpic
);
