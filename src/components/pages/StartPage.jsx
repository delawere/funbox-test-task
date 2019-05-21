import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TASK1, TASK2 } from "../../router/constants";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #e6eaee;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("./cat.png") no-repeat -9999px -9999px,
              url(./Pattern.png) no-repeat -9999px -9999px;
`;

const List = styled.ul`
  display: block;
  background-color: white;
  padding: 50px 25px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
`;

const ListItem = styled.li`
  margin: 10px 25px;

  > a {
    text-decoration: none;
    color: black;
    font-size: 22px;
    font-weight: 300;

    :hover,
    :focus {
      color: #1976d2;
    }
  }
`;

const StartPage = () => (
  <Wrapper>
    <List>
      <ListItem title={"Level 1"}>
        <NavLink exact to={TASK1}>
          level 1
        </NavLink>
      </ListItem>
      <ListItem title={"Level 2"}>
        <NavLink exact to={TASK2}>
          level 2
        </NavLink>
      </ListItem>
    </List>
  </Wrapper>
);

export default StartPage;
