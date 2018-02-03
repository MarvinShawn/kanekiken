import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { Button, Paper, Badge } from "material-ui";
import * as Svg from "../../assets";
import { HomePage } from "../../home";
import { CategoryPage, CategoryProductsPage } from "../../category";
import { ShoppingCartPage } from "../../shoppingcart";
import { ProfilePage } from "../../profile";

const Container = styled.div`
  background-color: #f6f8fa;
`;
//  box-sizing: border-box;
const BottomBar = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 56px;
  overflow: hidden;
`;

class MainPage extends React.Component {
  state = {
    selectedIndex: 0
  };
  showBarPaths = ["/", "/home", "/category", "/shoppingcart", "/profile"];
  tabBarInfo = [
    {
      path: "/home",
      icon: Svg.main
    },
    {
      path: "/category",
      icon: Svg.category
    },
    {
      path: "/shoppingcart",
      icon: Svg.shopping_cart
    },
    {
      path: "/profile",
      icon: Svg.profile
    }
  ];

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
            {this.tabBarInfo.map((ele, idx) => (
              <Button fullWidth key={idx} component={Link} to={ele.path}>
                {idx === 2 ? (
                  <Badge badgeContent={idx} color="secondary">
                    <embed src={ele.icon} width="23" height="23" />
                  </Badge>
                ) : (
                  <embed src={ele.icon} width="23" height="23" />
                )}
              </Button>
            ))}
          </BottomBar>
        ) : null}
      </Container>
    );
  }
}

export const App = MainPage;
/*
 <Button
                  key={ele.path}
                  component={Link}
                  to={ele.path}
                  onClick={() => this._select(idx)}
                  icon={}
                />
*/
