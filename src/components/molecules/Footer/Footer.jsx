import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  font-size: 13px;
  font-weight: 400;
  margin: 15px 0;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  letter-spacing: 0.025px;
  color: ${props => (props.disabled ? "#FFFF66" : "white")};
`;

const Hyperlink = styled.a`
  text-decoration: none;
  z-index: 10;
  display: inline-block;
  color: #1698d9;
  border-bottom: 1px dashed;
  cursor: pointer;
  transition: color 1s ease-in-out;
`;

const Footer = ({ title, hyperlinkTitle, selected, disabled, onClick }) => (
  <Container disabled={disabled} onClick={onClick}>
    {title} <Hyperlink href="#">{hyperlinkTitle}</Hyperlink>
  </Container>
);

export default Footer;
