import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GridList, Paper, withStyles, Typography, colors } from "material-ui";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  }
});

const SJPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const SJPrice = styled.div`
  color: ${colors.blue[500]};
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ItemDesc = styled.div`
  height: 40px;
  overflow: auto;
`;

function SingleLineGridList(props) {
  const { classes, dataSource } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" className={classes.gridList}>
        {dataSource.map((ele, idx) => (
          <SJPaper key={idx}>
            <img
              alt=""
              width="150"
              height="150"
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870454535,3766486674&fm=27&gp=0.jpg"
            />
            <Typography type="subheading" gutterBottom align="center">
              SJ6 Legend
            </Typography>
            <ItemDesc>
              刷卡孙德阿斯达看见吗爱上了大卡刷卡机刷的卡斯柯达海南粉丝丢水电费啥事
            </ItemDesc>
            <SJPrice>￥ 1234.00</SJPrice>
          </SJPaper>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  dataSource: PropTypes.array,
  classes: PropTypes.object.isRequired
};
SingleLineGridList.defaultProps = {
  dataSource: []
};

export const SJGridList = withStyles(styles)(SingleLineGridList);
