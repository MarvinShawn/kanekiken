import React from "react";
import {
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui";
import styled from "styled-components";
import * as Svg from "../../assets";

const Container = styled.div`
  background-color: #f6f8fa;
  width: 100%;
  height: ${window.innerHeight - 56}px;
`;

export class ProfilePage extends React.Component {
  itemsInfo = [
    {
      icon: Svg.all_orders,
      title: "全部订单"
    },
    {
      icon: Svg.obligation,
      title: "待付款"
    },
    {
      icon: Svg.receiving,
      title: "待发货"
    },
    {
      icon: Svg.delivering,
      title: "待收货"
    },
    {
      icon: Svg.delivery_address,
      title: "收货地址"
    },
    {
      icon: Svg.select_country,
      title: "国家/地区"
    }
  ];

  render() {
    return (
      <Container>
        <List
          component="nav"
          subheader={
            <ListSubheader
              component="div"
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 8,
                alignItems: "center"
              }}
            >
              <img
                src="http://img5.imgtn.bdimg.com/it/u=3526967867,1929901252&fm=27&gp=0.jpg"
                width={60}
                height={60}
                style={{ borderRadius: 30, overflow: "hidden" }}
                alt="Jack Chen"
              />
              <p style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold" }}>
                Jack Chen
              </p>
            </ListSubheader>
          }
        >
          {this.itemsInfo.map((ele, idx) => (
            <ListItem button key={idx}>
              <ListItemIcon>
                <embed src={ele.icon} width="23" height="23" />
              </ListItemIcon>
              <ListItemText inset primary={ele.title} />
              <ListItemSecondaryAction
                style={{
                  display: "flex",
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <embed src={Svg.arrow_right} width="23" height="23" />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}
