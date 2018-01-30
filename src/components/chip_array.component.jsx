import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Chip, withStyles } from "material-ui";

const SJChipContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const styles = {
  root: {
    margin: 3,
    height: 20,
    fontSize: 12
  },
  label: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

class ChipsArray extends React.Component {
  render() {
    const { dataSource, classes } = this.props;
    return (
      <SJChipContainer>
        {dataSource.map((ele, idx) => (
          <Chip
            classes={{
              root: classes.root,
              label: classes.label
            }}
            key={idx}
            label={ele}
          />
        ))}
      </SJChipContainer>
    );
  }
}

ChipsArray.propTypes = {
  dataSource: PropTypes.array,
  classes: PropTypes.object
};

ChipsArray.defaultProps = {
  dataSource: []
};

export const SJChipsArray = withStyles(styles)(ChipsArray);
