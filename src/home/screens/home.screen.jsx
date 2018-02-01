import React from "react";
import styled from "styled-components";
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  colors
} from "material-ui";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as SvgIcon from "../../assets";
import { fetchProductList, fetchBanner } from "../home.actions";
import { Banner, SJChipsArray, SJGridList } from "../../components";

const Container = styled.div`
  background-color: #f6f8fa;
  margin-bottom: 56px;
`;
const SJCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SJCardContent = styled(CardContent)`
  display: flex;
  padding-bottom: 1;
  align-items: center;
  flex-direction: column;
`;

// 系列
const CategoryContainer = styled.div`
  margin-top: 10px;
`;
// 系列header
const ItemHeader = styled(Paper)`
  display: flex;
  flex-direction: row;
  background-color: #91a2bc;
  flex: 0;
  height: 20px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
const CategoryTitle = styled.span`
  font-size: bold;
  color: #000;
`;

// 旗舰产品
const FlagshipItemContainer = styled.div`
  padding: 5px;
`;
const SJMedia = styled(CardMedia)`
  height: 200px;
  width: 200px;
`;

const SJPrice = styled.p`
  color: ${colors.blue[500]};
  font-size: 16px;
`;

const FlagshipItem = props => {
  const { itemInfo } = props;
  return (
    <FlagshipItemContainer>
      <SJCard>
        <SJMedia image={itemInfo.product_image_url} />
        <SJCardContent>
          <Typography type="subheading" gutterBottom align="center">
            {itemInfo.product_name}
          </Typography>
          <SJChipsArray dataSource={itemInfo.param.map(ele => ele.title)} />
          <Typography component="p">{itemInfo.product_description}</Typography>
          <SJPrice>{itemInfo.product_price}</SJPrice>
        </SJCardContent>
      </SJCard>
    </FlagshipItemContainer>
  );
};

const CategoryItem = props => {
  const { category } = props;

  const flagship_product =
    category && category.product.length > 0 ? category.product[0] : null;

  return (
    <CategoryContainer>
      {category ? (
        <ItemHeader
          component={Link}
          to={`category/${category.catetgory_resource_id}`}
        >
          <CategoryTitle>{category.catetgory_resource_name}</CategoryTitle>
          <embed src={SvgIcon.arrow_right} width="18" height="18" />
        </ItemHeader>
      ) : null}

      {flagship_product ? <FlagshipItem itemInfo={flagship_product} /> : null}
      {flagship_product ? (
        <SJGridList dataSource={category.product.slice(1)} />
      ) : null}
    </CategoryContainer>
  );
};

@connect(
  state => state.homePageReducer,
  dispatch => bindActionCreators({ fetchProductList, fetchBanner }, dispatch)
)
class HomePageScreen extends React.Component {
  props: {
    productList: Array,
    productListError: String,
    bannerList: Array,
    bannerListError: String,
    fetchProductList: Function,
    fetchBanner: Function
  };

  componentDidMount() {
    this.props.fetchProductList();
    this.props.fetchBanner();
  }
  render() {
    const { productList, bannerList } = this.props;
    return (
      <Container>
        <Banner dataSource={bannerList.map(ele => ele.product_image_url)} />
        {productList.map(ele => (
          <CategoryItem key={ele.category_id} category={ele} />
        ))}
      </Container>
    );
  }
}

export const HomePage = HomePageScreen;
