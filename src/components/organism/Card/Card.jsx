import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Circle from "../../molecules/Circle/Circle";

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  box-sizing: border-box;
  height: 460px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  padding-top: 21px;
  padding-left: 51px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 4px solid ${props => (props.selected ? "#D91667" : "#1698d9")};
  border-top: none;
  background-color: white;
  background-image: url("./cat.png");
  background-position: -24px 208px;
  background-repeat: no-repeat;
  background-size: 368px 360px;
  cursor: pointer;

  :hover {
    border-color: ${props => (props.selected ? "#E52E7A" : "#2ea8e6")};
  }

  ::before {
    content: "1";
    color: white;
    padding: 0;
    margin: 0;
    z-index: 2;
    width: 280px;
    border-top-right-radius: 12px;

    position: absolute;
    left: -4px;
    top: -36px;

    border-bottom: 40px solid white;
    border-left: 40px solid transparent;
  }
`;

const CardTitle = styled.h2`
  font-size: 48px;
  margin: 0;
  padding: 0;
  margin-top: 45px;
  margin-bottom: 6px;
`;

const CardEatName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const CardEatInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: rgb(216, 216, 216);
  white-space: pre-line;
`;

// const CardEatDesc = styled.p`
//   font-size: 16px;
// `;

const Border = styled.svg`
  z-index: 9;
  position: absolute;
  top: -60px;
  left: -4px;
`;

const Card = ({ eatName, portionCount, mouseCount, additional, eatWeight }) => {
  const [isSelectedCard, setSelectOnCard] = useState(false);
  return (
    <CardContainer
      onClick={() => setSelectOnCard(!isSelectedCard)}
      selected={isSelectedCard}
    >
      <Border width="440" height="440">
        <path
          d="M2,80 v-20 l40,-37 l266,0 a10,10 0 0 1 10,10 v32"
          fill="none"
          stroke={isSelectedCard ? "#D91667" : "#2ea8e6"}
          stroke-width="4"
        />
      </Border>
      <CardTitle>Нямушка</CardTitle>
      <CardEatName>c {eatName}</CardEatName>
      <CardEatInfo>
        {portionCount} порций
        {mouseCount} мышей в подарок {additional}
      </CardEatInfo>
      <Circle eatWeight={eatWeight} isSelectedCard={isSelectedCard} />
    </CardContainer>
  );
};

export default Card;
