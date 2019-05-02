import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  font-size: 36px;
  color: rgb(208, 154, 154);
  font-weight: 200;
  text-align: center;
`;

const Title = () => (
    <TitleContainer>Ты сегодня покормил кота?</TitleContainer>
);

export default Title;
