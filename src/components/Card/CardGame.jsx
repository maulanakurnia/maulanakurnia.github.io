import React from 'react';
import styled from 'styled-components';
const Circle = styled.div`
  svg {
    margin: 19px;
    z-index: 10000;
    transform: translateZ(0);
  }

`;

const Overlay = styled.div`
  width: 218px;
  position: absolute; 
  height: 218px;
  border-radius: 50%;
  background: ${props => props.bgColor};;
  top: 250px;
  left: 140px;
  z-index: 0;
  transition: transform 0.3s ease-out;
`;

const Card = styled.div`
  width: 120px;
  height: 121px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 5px;
  transition-duration: 5s;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  vertical-align: top;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
  &:hover ${Overlay}{
    transform: scale(4) translateZ(0);
  }
  &:hover ${Circle}:after{
    background: ${props => props.bgColorLight};
  }
  &:active{
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0,0,0,0.11),
    0 15px 24px ${props => props.boxShadowColor};
  }
  &:hover ${Circle}>svg{
      color: white!important;
      transition: transform 0.3s ease-out;
  }
`;


const CardGame = (props) => {
  return (  
      <Card bgColorLight={props.color} bgColor={props.color} boxShadowColor={props.color}>
          <Overlay bgColor={props.color}/>
          <Circle bgColor={props.color}>
            {props.svg}
          </Circle>
      </Card> 
  );
}
 
export default CardGame;