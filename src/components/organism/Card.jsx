import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Circle from "../molecules/Circle";
import Footer from "../molecules/Footer";
import Info from "../molecules/Info";

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
  navigator.userAgent
);

const CardSection = styled.li`
  @media (min-width: 320px) and (max-width: 980px) {
    margin-bottom: 50px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  box-sizing: border-box;
  height: 441px;
  padding: 0;
  margin: 0;
  padding-top: 21px;
  padding-left: 43px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 4px solid
    ${props =>
      props.disabled ? "#B3B3B3" : props.selected ? "#D91667" : "#1698d9"};
  border-top: none;
  background-color: white;
  background-image: url("./cat.png");
  background-position: -27px 168px;
  background-repeat: no-repeat;
  background-size: 368px 360px;
  cursor: pointer;

  :hover {
    border-color: ${props =>
      props.disabled ? "#B3B3B3" : props.selected ? "#E52E7A" : "#2EA8E6"};
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

const Title = styled.h2`
  font-size: 48px;
  letter-spacing: 2px;
  line-height: 0;
  margin: 0;
  margin-top: 14px;
  padding: 0;
  margin-bottom: 6px;
`;

const Name = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 26px;
  font-size: 24px;
  font-family: Trebuchet MS Bold, Helvetica, sans-serif;
  letter-spacing: 0.35px;
`;

const Header = styled.p`
  z-index: 3;
  position: absolute;
  font-size: 16px;
  color: ${props =>
    props.hover && props.selected && !isMobileDevice ? "#D91667" : "#666"};
  top: -33px;
  left: 45px;
`;

const Border = styled.svg`
  z-index: 9;
  position: absolute;
  top: -60px;
  left: -4px;
`;

const FooterTitles = {
  default: "Чего сидишь? Порадуй котэ,",
  selected: {
    foieGras: "Печень утки разварная с артишоками.",
    fish: "Головы щучьи с чесноком да свежайшая семгушка.",
    chicken: "Филе из цыплят с трюфелями в бульоне."
  }
};

const HeaderTitles = {
  default: "Сказочное заморское яство",
  selected: "Котэ не одобряет?"
};

const getFooterTitle = (isSelected, isDisabled, eatName) => {
  if (!isSelected && !isDisabled) {
    return FooterTitles.default;
  }

  if (isDisabled) {
    return `Печалька, с ${eatName} закончился`;
  }

  if (isSelected) {
    let selectedTitle;
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

const onClickCard = (action, disabled, state) => {
  if (!disabled) action(!state);
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
  const [isActiveSelectOnCard, setActiveSelect] = useState(false);
  const [isHover, setHover] = useState(false);
  const footerTitle = getFooterTitle(isSelectedCard, disabled, eatName);
  return (
    <CardSection>
      <div
        onMouseOut={() => {
          if (isMobileDevice) return;
          setHover(false);
          if (isSelectedCard) {
            setActiveSelect(true);
          } else {
            setActiveSelect(false);
          }
        }}
        onMouseOver={() => setHover(true)}
        onClick={() => {
          onClickCard(
            isMobileDevice ? setActiveSelect : setSelectOnCard,
            disabled,
            isActiveSelectOnCard
          );
        }}
      >
        <CardContainer selected={isActiveSelectOnCard} disabled={disabled}>
          <Border width="440" height="440">
            <path
              d="M2,75 v-14 l38,-38 l268,0 a10,10 0 0 1 10,10 v32"
              fill="none"
              stroke={
                disabled
                  ? "#B3B3B3"
                  : isActiveSelectOnCard
                  ? "#D91667"
                  : "#2ea8e6"
              }
              strokeWidth="4"
            />
          </Border>
          <Filter disabled={disabled} />
          <Header hover={isHover} selected={isActiveSelectOnCard}>
            {isHover && isActiveSelectOnCard && !isMobileDevice
              ? HeaderTitles.selected
              : HeaderTitles.default}
          </Header>
          <Title>Нямушка</Title>
          <Name>c {eatName}</Name>
          <Info
            portionCount={portionCount}
            mouseCount={mouseCount}
            additional={additional}
          />
          <Circle
            eatWeight={eatWeight}
            selected={isActiveSelectOnCard}
            disabled={disabled}
            hover={isHover}
          />
        </CardContainer>
      </div>
      <Footer
        disabled={disabled}
        title={footerTitle}
        hyperlinkTitle={disabled || isSelectedCard ? "" : "купи."}
        onClick={() => {
          setActiveSelect(true);
          setSelectOnCard(true);
        }}
      />
    </CardSection>
  );
};

export default Card;
