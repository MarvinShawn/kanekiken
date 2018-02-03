import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GridList, GridListTile, ListSubheader, Button } from "material-ui";
import { fetchCategory } from "../category.actions";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  margin-bottom: 56px;
`;

const SJInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SJImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

@connect(
  state => state.categoryPageReducer,
  dispatch => bindActionCreators({ fetchCategory }, dispatch)
)
export class CategoryPage extends React.Component {
  props: {
    fetchCategory: Function,
    categoryList: Array
  };

  componentDidMount() {
    this.props.fetchCategory();
  }
  render() {
    return (
      <Container>
        <GridList cols={2.0} spacing={5}>
          <GridListTile
            key="ListSubheader"
            cols={2.0}
            style={{ height: "auto" }}
          >
            <ListSubheader component="div">全部分类</ListSubheader>
          </GridListTile>
          {this.props.categoryList.map(tile => (
            <Button
              color="primary"
              key={tile.category_id}
              component={Link}
              to={`category/${tile.category_resource_id}`}
            >
              <SJInfoContainer>
                <SJImgContainer>
                  <img
                    width={120}
                    height={120}
                    src={tile.category_image_url}
                    alt={tile.category_name}
                  />
                </SJImgContainer>
                <p style={{ color: "#000", fontWeight: "bolder" }}>
                  {tile.category_name}
                </p>
              </SJInfoContainer>
            </Button>
          ))}
        </GridList>
      </Container>
    );
  }
}
