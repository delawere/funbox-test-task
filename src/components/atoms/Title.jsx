import React from "react";
import styled from "styled-components";

const Container = styled.h1`
  font-family: Exo;
  margin: 0;
  padding: 0;
  margin-top:33px;
  margin-bottom: 47px;
  font-size: 36px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 42px;
`;

const Title = () => <Container>Ты сегодня покормил кота?</Container>;

export default Title;
