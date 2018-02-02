import React from "react";
import { Paper, Typography, colors, Button, GridList } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import {
  fetchCategoryProducts,
  reInitailSingleCategoryProducts
} from "../category.actions";

const styles = {
  gridList: {
    overflowY: "auto"
  }
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: ${window.innerHeight}px;
  overflow: hidden;
`;

const ItemContainer = styled(Paper)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
`;

const ImageContainer = styled.div`
  flex: 0;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 8px 0px 8px;
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
    totalPage: Number,
    fetchCategoryProducts: Function,
    reInitailSingleCategoryProducts: Function
  };

  constructor(props) {
    super(props);
    this.currentPage = 1;
  }

  componentWillUnmount() {
    this.props.reInitailSingleCategoryProducts();
    this.currentPage = 1;
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryId = match.params.categoryid;
    this.props.fetchCategoryProducts({
      id: categoryId,
      page: this.currentPage
    });
  }

  _clickMoreAction = () => {
    const { match } = this.props;
    const categoryId = match.params.categoryid;
    this.currentPage += 1;
    this.props.fetchCategoryProducts({
      id: categoryId,
      page: this.currentPage
    });
  };
  render() {
    return (
      <Container>
        <GridList cellHeight="auto" style={styles.gridList} cols={1}>
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
          {this.props.totalPage > 1 &&
          this.currentPage < this.props.totalPage ? (
            <Button onClick={this._clickMoreAction} fullWidth>
              点击加载更多
            </Button>
          ) : (
            <div />
          )}
        </GridList>
      </Container>
    );
  }
}

/*

        


          {this.props.totalPage > 1 &&
          this.currentPage < this.props.totalPage ? (
            <Button onClick={this._clickMoreAction} fullWidth>
              点击加载更多
            </Button>
          ) : (
            <div />
          )}
*/
