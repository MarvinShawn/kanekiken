import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fab;
  width: 100%;
  height: ${window.innerHeight - 56}px;
`;

export class CategoryPage extends React.Component {
  render() {
    return <Container />;
  }
}
