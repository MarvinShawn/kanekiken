import React from "react";
import styled from "styled-components";
import { Carousel } from "antd-mobile";
import PropTypes from "prop-types";

const SJCarousel = styled(Carousel)`
  flex: 0;
  width: 100%;
  height: 150px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #f6f8fa;
`;

export const Banner = props => {
  const { dataSource, clickAction } = props;

  return (
    <SJCarousel autoplay infinite>
      {dataSource.map((ele, idx) => (
        <ImgContainer
          key={idx}
          onClick={() => {
            clickAction(idx);
          }}
        >
          <img src={ele} width={100} height={100} alt="" />
        </ImgContainer>
      ))}
    </SJCarousel>
  );
};
Banner.propTypes = {
  dataSource: PropTypes.array,
  clickAction: PropTypes.func
};
Banner.defaultProps = {
  dataSource: [],
  clickAction: () => {}
};
