import React from "react";
import styled from "styled-components";
import Circle from "../../molecules/Circle/Circle";

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  padding: 0;
  margin: 0;
  padding-top: 21px;
  padding-left: 51px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 4px solid rgb(22, 157, 217);
  background-color: white;
  background-image: url("./cat.png");
  background-position: -24px 208px;
  background-repeat: no-repeat;
  background-size: 368px 360px;
`;

const CardTitle = styled.h2`
  font-size: 48px;
  margin: 0;
  padding: 0;
`;

const CardEatName = styled.p`
  font-size: 24px;
`;

const CardEatInfo = styled.p`
  font-size: 14px;
  color: rgb(216, 216, 216);
`;

const CardEatDesc = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  padding-bottom: 24px;
`;

const Card = ({ eatName, portionCount, mouseCount, additional, eatWeight }) => (
  <CardContainer>
    <CardEatDesc>Сказочное заморское яство</CardEatDesc>
    <CardTitle>Нямушка</CardTitle>
    <CardEatName>c {eatName}</CardEatName>
    <CardEatInfo>
      {portionCount} порций {mouseCount} мышей в подарок {additional}
    </CardEatInfo>
    <Circle eatWeight={eatWeight} />
  </CardContainer>
);

export default Card;
