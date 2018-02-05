import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: ${window.innerHeight - 56}px;
`;

const makeToggleable = Clickable => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: false };
    }

    toggle = () => {
      this.setState({
        show: !this.state.show
      });
    };

    render() {
      return (
        <div>
          <Clickable {...this.props} onClick={this.toggle} />
          {this.state.show && this.props.children}
        </div>
      );
    }
  };
};

@makeToggleable
class ToggleableMenu extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export class ShoppingCartPage extends React.Component {
  render() {
    return (
      <Container>
        <ToggleableMenu title="First Menu">
          <p>Some content</p>
          <p>Some content</p>
        </ToggleableMenu>
        <ToggleableMenu title="Second Menu">
          <p>Another content</p>
          <p>Another content</p>
          <p>Another content</p>
        </ToggleableMenu>
        <ToggleableMenu title="Third Menu">
          <p>More content</p>
          <p>More content</p>
          <p>More content</p>
          <p>More content</p>
        </ToggleableMenu>
      </Container>
    );
  }
}
