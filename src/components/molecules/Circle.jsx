import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  right: 11px;
  bottom: 11px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props =>
    props.disabled
      ? "#b3b3b3"
      : props.selected
      ? "#D91667"
      : props.hover
      ? "#2EA8E6"
      : "#1698d9"};
  color: white;
  font-size: 42px;
  text-align: center;
  line-height: 60px;
`;

const Paragraph = styled.p`
  font-size: ${props => (props.largeFont ? "42px" : "20px")};
  margin: 0;
  padding: 0;
  line-height: ${props => (props.largeFont ? "42px" : "20px")};
`;

const Circle = ({ eatWeight, selected, disabled, hover }) => (
  <Container selected={selected} disabled={disabled} hover={hover}>
    <Paragraph largeFont={true}>{eatWeight}</Paragraph>
    <Paragraph>кг</Paragraph>
  </Container>
);

export default Circle;
