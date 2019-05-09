import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 15px;
  padding-left: 2px;
  font-size: 14px;
  line-height: 16px;
  color: #666;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  line-height: inherit;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const getDeclOfNumber = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const Info = ({ portionCount, mouseCount, additional }) => (
  <Container>
    <Paragraph>
      <Bold>{portionCount}</Bold> порций
    </Paragraph>
    <Paragraph>
      <Bold>{mouseCount === 1 ? "" : mouseCount} </Bold>
      {getDeclOfNumber(mouseCount, ["мышь", "мыши", "мышей"])} в подарок
    </Paragraph>
    <Paragraph>{additional}</Paragraph>
  </Container>
);

export default Info;
