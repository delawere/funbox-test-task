import React from "react";
import styled from "styled-components";
import Card from "../../organism/Card/Card";
import Title from "../../molecules/Title/Title";
import "../../../App.css";

const MainContainer = styled.main`
  font-family: Trebuchet MS;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: transparent;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

const CardsSection = styled.div`
  width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 480px) {
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
