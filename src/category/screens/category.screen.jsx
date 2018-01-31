import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader
} from "material-ui";
import { fetchCategory } from "../category.actions";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  height: ${window.innerHeight - 56}px;
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
        <GridList>
          <GridListTile key="ListSubheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">全部分类</ListSubheader>
          </GridListTile>
          {this.props.categoryList.map(tile => (
            <GridListTile key={tile.category_id}>
              <SJImgContainer>
                <img
                  width={120}
                  height={120}
                  src={tile.category_image_url}
                  alt={tile.category_name}
                />
              </SJImgContainer>

              <GridListTileBar title={tile.category_name} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    );
  }
}
