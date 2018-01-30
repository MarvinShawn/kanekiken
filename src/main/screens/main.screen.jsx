import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "material-ui";
import * as SvgIcon from "../../assets";
import { Banner, SJChipsArray, SJGridList } from "../../components";
import { HomePage } from "../../home";
import { CategoryPage } from "../../category";
import { ShoppingCartPage } from "../../shoppingcart";
import { ProfilePage } from "../../profile";

const Container = styled.div`
  background-color: #f6f8fa;
`;

const BottomBar = styled(Paper)`
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

class MainPage extends React.Component {
  state = {
    selectedIndex: 0
  };

  _select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category" component={CategoryPage} />
          <Route exact path="/shoppingcart" component={ShoppingCartPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <BottomBar>
            <BottomNavigation value={this.state.selectedIndex}>
              <BottomNavigationAction
                component={Link}
                to="/"
                onClick={() => this._select(0)}
                icon={<embed src={SvgIcon.main} width="25" height="25" />}
              />
              <BottomNavigationAction
                component={Link}
                to="/category"
                onClick={() => this._select(1)}
                icon={<embed src={SvgIcon.category} width="18" height="18" />}
              />
              <BottomNavigationAction
                component={Link}
                to="/shoppingcart"
                onClick={() => this._select(2)}
                icon={
                  <embed src={SvgIcon.shopping_cart} width="25" height="25" />
                }
              />
              <BottomNavigationAction
                component={Link}
                to="/profile"
                onClick={() => this._select(3)}
                icon={<embed src={SvgIcon.profile} width="26" height="26" />}
              />
            </BottomNavigation>
          </BottomBar>
        </Container>
      </Router>
    );
  }
}

export const App = MainPage;
