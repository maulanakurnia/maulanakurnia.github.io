import React from 'react';
import styled from 'styled-components';
import { Flex } from "@primer/components";
import { RiBookletLine } from "react-icons/ri";

// const Container = styled.div`
//   justify-content: center;
//   align-items: center;
//   padding: 0px 300px 0px 450px;

//   @media (min-width: 320px) and (max-width: 568px) {
//     padding: 0px 300px 0px 80px;
//   }
//   @media (min-width: 411px) and (max-width: 568px) {
//     padding: 0px 300px 0px 80px;
//   }
//   @media (max-width: 727px) {
//     padding: 0px 300px 0px 60px;
//   }
//   @media (max-width: 768px) {
//     padding: 0px 0px 0px 50px;
//   }
//   @media (min-width: 1024px) and (max-width: 1366px) {
//     padding: 0px 0px 0px 10px;
//   }
// `;

const CardWrapper = styled.div`
  background: ${(props) => props.bg};
  width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding-bottom: 20px;
  border-radius: ${(props) => props.borderRadius}px;
  margin: 0px 0px 10px 10px;
  display: inline-block;
  @media only screen and (min-width: 320px) {
    width: 250px;
  }
  @media only screen and (min-width: 768px) {
    width: 320px;
  }
  transition-duration: 5s;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 0px rgba(20, 70, 32, 0.1),
      inset 0px 2px 0px rgba(255, 255, 255, 0.03);
    transform: translate3d(0, -7px, 0);
    --webkit-transform: translate3d(0, -2px, 0);
  }
`;

const Title = styled.h3`
  color: ${(props) => props.titleColor};
  margin: 0;
  padding: 15px 15px 0px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  color: ${(props) => props.textColor};
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
  background-color: #89e051;
`;

const Language = styled.p`
  color: #000000;
  margin: -3px 0px 0px 9px;
`;

const Card = ({
  title,
  language,
  description,
  titleColor,
  textColor,
  borderRadius,
  created,
  ...props
}) => (
  <CardWrapper borderRadius={borderRadius} {...props}>
    <Title titleColor={titleColor}>
      <RiBookletLine color={"#020202"} style={{ marginBottom: "-3px" }} />{" "}
      {title}
    </Title>
    <Description textColor={textColor}>{description}</Description>
    <ExtraContent>
      <Flex>
        <LangColor />
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