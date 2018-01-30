import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import * as ActionTypes from "./home.constants";
import * as Actions from "./home.actions";
import * as ApiManager from "../api";

// 产品列表epic
const fetchProductListEpic = action$ =>
  action$.ofType(ActionTypes.FETCH_PRODUCT_LIST).switchMap(() =>
    Observable.fromPromise(ApiManager.FetProductList())
      .map(res => (res.status === 200 ? res.data : []))
      .flatMap(res => Observable.of(Actions.getProductList(res)))
      .catch(error => Observable.of(Actions.getProductListError(error.message)))
  );

// 轮播图epic
const fetchBannerListEpic = action$ =>
  action$.ofType(ActionTypes.FETCH_BANNER).switchMap(() =>
    Observable.fromPromise(ApiManager.FetchBanner())
      .map(res => (res.status === 200 ? res.data : []))
      .flatMap(res => Observable.of(Actions.getBanner(res)))
      .catch(error => Observable.of(Actions.getBannerError(error.message)))
  );

export const homePageEpics = combineEpics(
  fetchProductListEpic,
  fetchBannerListEpic
);
