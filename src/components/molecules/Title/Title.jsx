import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  font-family: Exo;
  margin: 0;
  padding: 0;
  margin-top: 36px;
  margin-bottom: 66px;
  font-size: 36px;
  color: #fff;
  font-weight: 800;
  text-align: center;
  line-height: 42px;
`;

const Title = () => <TitleContainer>Ты сегодня покормил кота?</TitleContainer>;

export default Title;
