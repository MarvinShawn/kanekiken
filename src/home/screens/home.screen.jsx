import React from "react";
import styled from "styled-components";
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  colors
} from "material-ui";
import * as SvgIcon from "../../assets";
import { Banner, SJChipsArray, SJGridList } from "../../components";

const Container = styled.div`
  background-color: #f6f8fa;
  margin-bottom: 56px;
`;

// 系列
const CategoryContainer = styled.div`
  margin-top: 15px;
`;
// 系列header
const ItemHeader = styled(Paper)`
  display: flex;
  flex-direction: row;
  background-color: #91a2bc;
  flex: 0;
  height: 20px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
const CategoryTitle = styled.span`
  font-size: 100%;
`;

// 旗舰产品
const FlagshipItemContainer = styled.div`
  padding: 5px;
`;
const SJMedia = styled(CardMedia)`
  height: 200px;
`;

const SJPrice = styled.p`
  color: ${colors.blue[500]};
  font-size: 16px;
`;

const FlagshipItem = props => {
  return (
    <FlagshipItemContainer>
      <Card>
        <SJMedia image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516946792626&di=bce1c8f49625254813d03277bbaa5f4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017c9c57459bfb32f875a429e65c88.jpg%401280w_1l_2o_100sh.jpg" />
        <CardContent style={{ paddingBottom: 1 }}>
          <Typography type="subheading" gutterBottom align="center">
            SJ6 Legend
          </Typography>
          <SJChipsArray
            dataSource={[
              "qwee",
              "ertert",
              "HYA ASXAS",
              "sasd",
              "2K",
              "Remote Control"
            ]}
          />
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <SJPrice>￥ 1234.00</SJPrice>
        </CardContent>
      </Card>
    </FlagshipItemContainer>
  );
};

const CategoryItem = props => {
  return (
    <CategoryContainer>
      <ItemHeader>
        <CategoryTitle>SJ6 Lengend</CategoryTitle>
        <embed src={SvgIcon.arrow_right} width="18" height="18" />
      </ItemHeader>
      <FlagshipItem />
      <SJGridList dataSource={[1, 2, 3, 4, 4, 5, 6, 7, 8]} />
    </CategoryContainer>
  );
};

export class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <Banner
          dataSource={[
            "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=64582aa9770e0cf3b4fa46a96b2f997a/d058ccbf6c81800aedd20eb5b43533fa828b4752.jpg",
            "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=75ff89c434d12f2eda08a6322eabbe07/c995d143ad4bd1137de35f2158afa40f4bfb05f2.jpg",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg"
          ]}
        />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Container>
    );
  }
}
