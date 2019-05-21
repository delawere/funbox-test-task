import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import CardsContainer from "../template/CardsContainer"
import "../../App.css";

const Wrapper = styled.div`
  background-image: url("./Pattern.png");
  position: relative;
  z-index: 0;
  background-color: transparent;

  ::before,
  ::after {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 30%;
    content: "";
  }

  ::before {
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  ::after {
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
`;

const MainContainer = styled.main`
  font-family: Trebuchet MS, Helvetica, sans-serif;
  z-index: 1;
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

const Level2Page = () => (
  <Wrapper>
    <MainContainer>
      <Title />
      <CardsContainer />
    </MainContainer>
  </Wrapper>
);

export default Level2Page;
