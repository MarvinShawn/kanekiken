import React from "react";
import styled from "styled-components";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader
} from "material-ui";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  height: ${window.innerHeight - 56}px;
`;

const mockData = [
  {
    icon:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg",
    title: "通用配件"
  },
  {
    icon:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg",
    title: "SJ360 系列"
  },
  {
    icon:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg",
    title: "SJ6 系列"
  },
  {
    icon:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg",
    title: "SJ8 系列"
  },
  {
    icon:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg",
    title: "5000X 系列"
  },
  {
    icon:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg",
    title: "4000 系列"
  }
];

export class CategoryPage extends React.Component {
  render() {
    return (
      <Container>
        <GridList>
          <GridListTile key="ListSubheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">全部分类</ListSubheader>
          </GridListTile>
          {mockData.map(tile => (
            <GridListTile key={tile.title}>
              <img src={tile.icon} alt={tile.title} />
              <GridListTileBar title={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    );
  }
}
