import axios from "axios";

// http://rapapi.org/mockjsdata/27196/api/
// http://192.168.1.217:8081/api/
const AxiosIns = axios.create({
  baseURL: "http://192.168.1.217:89/api/",
  timeout: 12000
});

global.currentAreaCode = "CN";

// 首页的产品列表
export const FetProductList = () =>
  AxiosIns.get("goods/category", {
    params: { AreaCode: global.currentAreaCode }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 首页轮播图
export const FetchBanner = () =>
  AxiosIns.get("goods/goodsbanner", {
    params: { AreaCode: global.currentAreaCode, size: 5 }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 商品分类
export const FetchCategory = () =>
  AxiosIns.get("goods/queryallcategory", {
    params: { AreaCode: global.currentAreaCode }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 产品详情
export const FetchDetail = (product_id: Number) =>
  AxiosIns.get("goods/goodsdetail", {
    params: { ProductDetailId: product_id }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 产品套餐
export const FetchPackage = (product_id: Number) =>
  AxiosIns.get("goods/goodspackage", {
    params: { ProductDetailId: product_id }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 产品详情图片
export const FetchDetailImages = (product_id: Number) =>
  AxiosIns.get("goods/goodsdetailimage", {
    params: { ProductDetailId: product_id }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 产品介绍图片
export const FetchDetailIntroImages = (product_id: Number) =>
  AxiosIns.get("goods/goodsshow", {
    params: { ProductDetailId: product_id }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 用户信息
export const FetchUserInfo = (user_id: Number) =>
  AxiosIns.get("user/info", {
    params: {
      user_id
    }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 收货地址列表
export const FetchDeliveryAddress = () =>
  AxiosIns.get("account/deliveryaddress");

// 新增收货地址
export const AddDeliveryAddress = address =>
  AxiosIns.post("account/deliveryaddressadd", {
    account_name: address.name,
    account_email: address.email,
    cell_phone: address.phone,
    area: address.area,
    areacode: address.areaCode,
    detail_address: address.detailAddress,
    post_code: address.postcode,
    oversea: address.oversea
  });

// 删除收货地址
export const DeleteDeliveryAddress = (address_id: Number) =>
  AxiosIns.post(
    "account/deliveryaddressdelete",
    {},
    {
      params: {
        addressid: address_id
      }
    }
  );

// 修改收货地址信息
export const ModifyDeliveryAddress = address =>
  AxiosIns.post("account/deliveryaddressedit", {
    address_id: address.addressId,
    account_name: address.name,
    account_email: address.email,
    cell_phone: address.phone,
    area: address.area,
    areacode: address.areaCode,
    detail_address: address.detailAddress,
    post_code: address.postcode,
    oversea: address.oversea
  });

// 设置默认地址
export const SetDefaultDeliveryAddress = (address_id: Number) =>
  AxiosIns.post(
    "account/deliveryaddresssetdefault",
    {},
    {
      params: {
        addressid: address_id
      }
    }
  );

// 默认地址
export const FetchDefaultDeliveryAddress = () =>
  AxiosIns.get("account/deliverydefaultaddress");

// 优惠券
export const FetchCoupons = (user_id: Number) =>
  AxiosIns.get("user/coupons", {
    params: {
      user_id
    }
  });

// 展示某个大类型
export const FetchSingleCategoryProduct = (category_id: Number, page: Number) =>
  AxiosIns.get("goods/querycategory", {
    params: {
      categoryresourceid: category_id,
      AreaCode: global.currentAreaCode,
      page,
      pagesize: 10
    }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 认领购物车
export const FetchShoppingCart = () =>
  AxiosIns.get("goods/shoppingcart", {
    params: {
      AreaCode: global.currentAreaCode
      // page,
      // pagesize: 10,
    }
    // headers: { 'X-SJCAM-Secret': await getSecretParam() },
  });

// 修改购物车数量
export const ModifyCartProductCount = (
  shopcartdetail_id: Number,
  count: Number
) =>
  AxiosIns.post(
    "goods/edittocarcount",
    {
      shopcartdetailid: shopcartdetail_id,
      count
    },
    {
      // headers: { 'X-SJCAM-Secret': await getSecretParam() },
    }
  );

// 删除购物车中的商品
export const DeleteCartProduct = (detail_id: Number) =>
  AxiosIns.post(
    "goods/cartdelete",
    {},
    {
      params: { detailid: detail_id }
      // headers: { 'X-SJCAM-Secret': await getSecretParam() },
    }
  );

// 结算购物车时的订单商品列表 (很奇怪为啥不直接从上一页面直接传过来。。。)
export const FetchCartProduct = (areaCode: String) =>
  AxiosIns.get("goods/cartbalance", {
    params: {
      AreaCode: areaCode
    }
  });

// 购物车结算货币种类
export const FetchCartcash = () => AxiosIns.get("goods/cartcash");

// 购物车结算邮费计算
export const FetchPostage = (addressId: Number) =>
  AxiosIns.get("goods/cartbalancepost", {
    params: {
      Addressid: addressId
    }
  });

// 添加到购物车
export const AddToCart = (
  productdetail_id: Number,
  color_id: Number = 0,
  package_id: Number = 0,
  count: Number = 1
) =>
  AxiosIns.post(
    "goods/addtocar",
    {
      productid: productdetail_id,
      colorid: color_id,
      packageid: package_id,
      count
    },
    {
      // headers: { 'X-SJCAM-Secret': await getSecretParam() },
    }
  );

// 提交订单
export const OrderCommit = (orderInfo: Object) =>
  AxiosIns.post("goods/ordercommit", {
    shop_cart_id: orderInfo.shopCartId,
    address_id: orderInfo.addressId,
    area_id: orderInfo.areaId,
    remark: orderInfo.remark
  });

// 检索全部订单
export const FetchAllOrder = (page: Number) =>
  AxiosIns.get("goods/order", {
    params: {
      page,
      pagesize: 10
    }
  });

// 检索不同状态下的订单  1 待付款,2待发货,3 待收货,4 完成
export const FetchOrderWithState = (state: Number, page: Number) =>
  AxiosIns.get("goods/queryorder", {
    params: {
      State: state,
      page,
      pagesize: 10
    }
  });

// 获取订单详情
export const FetchOrderDetail = (orderId: Number) =>
  AxiosIns.get("goods/orderdetail", {
    params: {
      orderid: orderId
    }
  });

// 删除订单
export const DeleteOrder = (orderId: Number) =>
  AxiosIns.post(
    "goods/orderdelete",
    {},
    {
      params: {
        orderid: orderId
      }
    }
  );
