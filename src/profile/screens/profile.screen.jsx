import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fc5830;
  width: 100%;
  height: ${window.innerHeight - 56}px;
`;

export class ProfilePage extends React.Component {
  render() {
    return <Container />;
  }
}
