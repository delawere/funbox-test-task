import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  font-size: 13px;
  padding: 13px 0;
  text-align: center;
  color: ${props => (props.disabled ? "#FFFF66" : "white")};
`;

const Hyperlink = styled.a`
  color: #1698d9;
  border-bottom: 1px dashed;
  cursor: pointer;
  transition: color 1s ease-in-out;
`;

const Footer = ({ title, hyperlinkTitle, selected, disabled, onClick }) => (
  <FooterContainer disabled={disabled} onClick = {onClick}>
    {title} <Hyperlink>{hyperlinkTitle}</Hyperlink>
  </FooterContainer>
);

export default Footer;
