import React from "react";
import styled from "styled-components";
import Card from "../../organism/Card/Card";
import Title from "../../atoms/Title/Title";
import "../../../App.css";

const MainContainer = styled.main`
  font-family: Trebuchet MS;
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: transparent;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 980px) {
    height: 100%;
  }
`;

const CardsSection = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  min-height: 487px;

  @media (min-width: 320px) and (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;

const data = [
  {
    disabled: false,
    eatName: "фуа-гра",
    portionCount: 10,
    mouseCount: 1,
    additional: "",
    eatWeight: "0,5"
  },
  {
    disabled: false,
    eatName: "рыбой",
    portionCount: 40,
    mouseCount: 2,
    additional: "",
    eatWeight: "2"
  },
  {
    disabled: true,
    eatName: "курой",
    portionCount: 100,
    mouseCount: 5,
    additional: "заказчик доволен",
    eatWeight: "5"
  }
];

const Main = () => (
  <MainContainer>
    <Title />
    <CardsSection>
      {data.map((card, i) => (
        <Card
          key={i}
          disabled={card.disabled}
          eatName={card.eatName}
          portionCount={card.portionCount}
          mouseCount={card.mouseCount}
          additional={card.additional}
          eatWeight={card.eatWeight}
        />
      ))}
    </CardsSection>
  </MainContainer>
);

export default Main;
