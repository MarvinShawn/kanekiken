import React from "react";
import { Paper, Typography, colors } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import {
  fetchCategoryProducts,
  reInitailSingleCategoryProducts
} from "../category.actions";

const Container = styled.div`
  width: 100%;
  height: ${window.innerHeight}px;
`;

const ItemContainer = styled(Paper)`
  display: flex;
  flex-direction: row;
  margin-left: 2.5%;
  width: 95%;
  padding: 10px 0px 10px 0px;
  margin-top: 8px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const SJPrice = styled.p`
  color: ${colors.blue[500]};
  font-size: 16px;
`;

@connect(
  state => state.singleCategoryProductsReducer,
  dispatch =>
    bindActionCreators(
      { fetchCategoryProducts, reInitailSingleCategoryProducts },
      dispatch
    )
)
export class CategoryProductsPage extends React.Component {
  props: {
    productList: Array,
    fetchCategoryProducts: Function,
    reInitailSingleCategoryProducts: Function
  };

  componentWillUnmount() {
    this.props.reInitailSingleCategoryProducts();
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryId = match.params.categoryid;
    this.props.fetchCategoryProducts({ id: categoryId, page: 1 });
  }

  render() {
    return (
      <Container>
        {this.props.productList.map((ele, idx) => (
          <ItemContainer component="div" key={idx}>
            <ImageContainer>
              <img
                src={ele.image_url}
                width={100}
                height={100}
                alt={ele.name}
              />
            </ImageContainer>
            <InfoContainer>
              <Typography type="button">{ele.name}</Typography>
              <Typography type="caption">{ele.description}</Typography>
              <SJPrice>{ele.product_price}</SJPrice>
            </InfoContainer>
          </ItemContainer>
        ))}
      </Container>
    );
  }
}
