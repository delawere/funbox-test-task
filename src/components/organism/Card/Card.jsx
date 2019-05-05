import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Circle from "../../molecules/Circle/Circle";
import Footer from "../../molecules/Footer/Footer";

const CardWrapper = styled.section``;

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  box-sizing: border-box;
  height: 460px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  padding-top: 21px;
  padding-left: 46px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 4px solid
    ${props =>
      props.disabled ? "#B3B3B3" : props.selected ? "#D91667" : "#1698d9"};
  border-top: none;
  background-color: white;
  background-image: url("./cat.png");
  background-position: -24px 208px;
  background-repeat: no-repeat;
  background-size: 368px 360px;
  cursor: pointer;

  :hover {
    border-color: ${props =>
      props.disabled ? "#B3B3B3" : props.selected ? "#E52E7A" : "#2ea8e6"};
  }

  ::before {
    content: "";
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

const Filter = styled.div`
  display: ${props => (props.disabled ? "" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.5;
  border-radius: 12px;
`;

const CardTitle = styled.h2`
  font-size: 48px;
  line-height: 0;
  margin: 0;
  margin-top: 7px;
  padding: 0;
  margin-bottom: 6px;
`;

const CardEatName = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 22px;
  font-size: 24px;
`;

const CardEatInfo = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 24px;
  font-size: 14px;
  color: #666;
  white-space: pre-line;
`;

const CardEatDesc = styled.p`
  z-index: 3;
  position: absolute;
  font-size: 16px;
  color: #d8d8d8;
  top: -37px;
  left: 48px;
`;

const Border = styled.svg`
  z-index: 9;
  position: absolute;
  top: -60px;
  left: -4px;
`;

const FooterTitles = {
  default: "Чего сидишь? Порадуй котэ",
  selected: {
    foieGras: "Печень утки разварная с артишоками",
    fish: "Головы щучьи с чесноком да свежайшая семгушка",
    chicken: "Филе из цыплят с трюфелями в бульоне"
  }
};

const getFooterTitle = (isSelected, isDisabled, eatName) => {
  if (!isSelected && !isDisabled) {
    return FooterTitles.default;
  }

  if (isDisabled) {
    return `Печалька, с ${eatName} закончился`;
  }

  let selectedTitle;

  if (isSelected) {
    debugger;
    switch (eatName) {
      case "фуа-гра":
        selectedTitle = FooterTitles.selected.foieGras;
        break;

      case "рыбой":
        selectedTitle = FooterTitles.selected.fish;
        break;
      case "курой":
        selectedTitle = FooterTitles.selected.chicken;
        break;
      default:
        selectedTitle = "";
    }

    return selectedTitle;
  }
};

const Card = ({
  disabled,
  eatName,
  portionCount,
  mouseCount,
  additional,
  eatWeight
}) => {
  const [isSelectedCard, setSelectOnCard] = useState(false);
  const footerTitle = getFooterTitle(isSelectedCard, disabled, eatName);
  return (
    <CardWrapper>
      <CardContainer
        onClick={() => {
          if (!disabled) setSelectOnCard(!isSelectedCard);
        }}
        selected={isSelectedCard}
        disabled={disabled}
      >
        <Border width="440" height="440">
          <path
            d="M2,80 v-20 l40,-37 l266,0 a10,10 0 0 1 10,10 v32"
            fill="none"
            stroke={
              disabled ? "#B3B3B3" : isSelectedCard ? "#D91667" : "#2ea8e6"
            }
            stroke-width="4"
          />
        </Border>
        <Filter disabled={disabled} />
        <CardEatDesc>Сказочные заморские яства</CardEatDesc>
        <CardTitle>Нямушка</CardTitle>
        <CardEatName>c {eatName}</CardEatName>
        <CardEatInfo>
          <p>{portionCount} порций</p>
          <p>{mouseCount} мышей в подарок</p>
          <p>{additional}</p>
        </CardEatInfo>
        <Circle eatWeight={eatWeight} isSelectedCard={isSelectedCard} />
      </CardContainer>
      <Footer
        disabled={disabled}
        title={footerTitle}
        hyperlinkTitle={disabled || isSelectedCard ? "" : "купи"}
      />
    </CardWrapper>
  );
};

export default Card;
