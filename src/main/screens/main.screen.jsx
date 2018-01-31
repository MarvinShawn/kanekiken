import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "material-ui";
import * as SvgIcon from "../../assets";
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
  tabBarInfo = [
    {
      title: "首页",
      path: "/",
      icon: SvgIcon.main
    },
    {
      title: "分类",
      path: "/category",
      icon: SvgIcon.category
    },
    {
      title: "购物车",
      path: "/shoppingcart",
      icon: SvgIcon.shopping_cart
    },
    {
      title: "我的",
      path: "/profile",
      icon: SvgIcon.profile
    }
  ];

  componentDidMount() {
    window.onpopstate = event => {
      const pathName = document.location.pathname;
      switch (pathName) {
        case "/":
          this._select(0);
          break;
        case "/category":
          this._select(1);
          break;
        case "/shoppingcart":
          this._select(2);
          break;
        case "/profile":
          this._select(3);
          break;
        default:
          break;
      }
    };
  }

  _select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/shoppingcart" component={ShoppingCartPage} />
          <Route path="/profile" component={ProfilePage} />
          <BottomBar>
            <BottomNavigation showLabels value={this.state.selectedIndex}>
              {this.tabBarInfo.map((ele, idx) => (
                <BottomNavigationAction
                  key={ele.path}
                  label={ele.title}
                  component={Link}
                  to={ele.path}
                  onClick={() => this._select(idx)}
                  icon={<embed src={ele.icon} width="25" height="25" />}
                />
              ))}
            </BottomNavigation>
          </BottomBar>
        </Container>
      </Router>
    );
  }
}

export const App = MainPage;
