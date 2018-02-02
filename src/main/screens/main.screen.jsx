import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "material-ui";
import * as Svg from "../../assets";
import { HomePage } from "../../home";
import { CategoryPage, CategoryProductsPage } from "../../category";
import { ShoppingCartPage } from "../../shoppingcart";
import { ProfilePage } from "../../profile";

const Container = styled.div`
  background-color: #f6f8fa;
`;

const BottomBar = styled(Paper)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
`;

class MainPage extends React.Component {
  state = {
    selectedIndex: 0
  };
  showBarPaths = ["/", "/home", "/category", "/shoppingcart", "/profile"];
  tabBarInfo = [
    {
      title: "首页",
      path: "/home",
      icon: Svg.main
    },
    {
      title: "分类",
      path: "/category",
      icon: Svg.category
    },
    {
      title: "购物车",
      path: "/shoppingcart",
      icon: Svg.shopping_cart
    },
    {
      title: "我的",
      path: "/profile",
      icon: Svg.profile
    }
  ];

  componentDidMount() {
    window.onpopstate = event => {
      const pathName = document.location.pathname;
      switch (pathName) {
        case "/":
        case "/home":
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
    const isShowbar = !!this.showBarPaths.find(
      ele => ele === window.location.pathname
    );
    return (
      <Container>
        <Route exact path="/(home)?" component={HomePage} />
        <Route exact path="/category" component={CategoryPage} />
        <Route path="/shoppingcart" component={ShoppingCartPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/category/:categoryid" component={CategoryProductsPage} />
        
       {isShowbar ? (
          <BottomBar>
            <BottomNavigation showLabels value={this.state.selectedIndex}>
              {this.tabBarInfo.map((ele, idx) => (
                <BottomNavigationAction
                  key={ele.path}
                  label={ele.title}
                  component={Link}
                  to={ele.path}
                  onClick={() => this._select(idx)}
                  icon={<embed src={ele.icon} width="23" height="23"/>}
                />
              ))}
            </BottomNavigation>
          </BottomBar>
        ) : null}

      </Container>
    );
  }
}

export const App = MainPage;
