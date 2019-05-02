import React from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgb(22, 157, 217);
  color: white;
  font-size: 42px;
  text-align: center;
  line-height: 80px;

`;

const Weight = styled.p`
  font-size: 42px;
  margin: 0;
  padding: 0;
  white-space: pre;
`;

const Dimension = styled.span`
  font-size: 20px;
`;

const Circle = ({ eatWeight }) => (
  <CircleContainer>
    <Weight>
      {eatWeight}
      <Dimension>кг</Dimension>
    </Weight>
  </CircleContainer>
);

export default Circle;
