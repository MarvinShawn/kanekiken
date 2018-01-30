import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #d51a2f;
  width: 100%;
  height: ${window.innerHeight - 56}px;
`;

export class ShoppingCartPage extends React.Component {
  render() {
    return <Container />;
  }
}
