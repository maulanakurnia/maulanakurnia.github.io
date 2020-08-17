import React from 'react';
import styled from 'styled-components';
import { Flex } from "../layout";
import { RiBookletLine } from "react-icons/ri";

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.content};
  width: 305px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding-bottom: 20px;
  border-radius: ${(props) => props.borderRadius}px;
  margin: 0px 0px 10px 10px;
  display: inline-block;
  transition-duration: 5s;
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  -ms-transition: all 0.7s ease;
  transition: all 0.7s ease;
  // box-shadow: 0 5px 10px rgba(0, 0, 0, .12);

  &:hover {
    cursor: pointer;
    // box-shadow: 0px 1px 0px rgba(20, 70, 32, 0.1);
    // transform: translate3d(0, -10px, 0);
    // --webkit-transform: translate3d(0, -2px, 0);
    box-shadow: 0 30px 60px rgba(0, 0, 0, .12);
  }
`;

const Title = styled.h3`
  color: ${(props) => props.titleColor};
  margin: 0;
  padding: 15px 15px 0px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg{
    color : ${({ theme }) => theme.text};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
  padding: 15px 15px 15px 15px;
  margin: 0;
  display: inline-block;
  font-size: 12px;
`;

const ExtraContent = styled.div`
  max-width: 100%;
  min-height: 0 !important;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
  position: static;
  background: 0 0;
  width: auto;
  margin: 0 0;
  padding: 10px 0px 0px 10px;
  font-size: 13px;
  top: 0;
  left: 0;
  color: rgba(0, 0, 0, 0.4);
  box-shadow: none;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
`;

const LangColor = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-${(props) => props.ColorLang};
`;

const Language = styled.p`
  color:${({ theme }) => theme.text};
  margin: -2px 0px 0px 9px;
  font-weight: bold;
`;

const Card = ({
  title,
  language,
  description,
  titleColor,
  textColor,
  borderRadius,
  created,
  langColors,
  ...props
}) => (
  <CardWrapper borderRadius={borderRadius} {...props}>
    <Title titleColor={titleColor}>
      <RiBookletLine style={{ marginBottom: "-3px" }} />{" "}
      {title}
    </Title>
    <Description textColor={textColor}>{description}</Description>
    <ExtraContent>
      <Flex>
        <LangColor ColorLang={langColors}/>
        <Language>{language}</Language>
      </Flex>
    </ExtraContent>
  </CardWrapper>
);

Card.defaultProps = {
  bg: "white",
  titleColor: "#0366d6",
  textColor: "#999",
  borderRadius: 9,
};

export default Card;