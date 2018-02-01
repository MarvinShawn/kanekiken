import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GridList, Paper, withStyles, colors } from "material-ui";

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
    alignItems: "center",
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
  margin-left: 8px;
`;

const SJPrice = styled.div`
  color: ${colors.blue[500]};
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.div`
  padding: 3px;
  font-size: 12px;
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
              alt={ele.product_name}
              width="150"
              height="150"
              src={ele.product_image_url}
            />
            <ItemTitle>{ele.product_name}</ItemTitle>
            <SJPrice>{ele.product_price}</SJPrice>
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
