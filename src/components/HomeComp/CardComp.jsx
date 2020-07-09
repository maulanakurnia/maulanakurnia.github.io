import React, {Component} from 'react';
import styled from 'styled-components';
import DevIcon from "devicon-react-svg";
import { Box } from "@primer/components";
import { DiJsBadge, DiPhp, DiJava, DiMysql,DiSass, DiLinux, DiGit} from "react-icons/di";
const Circle = styled.div`
  /* width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background: ${props => props.bgColor};;
    border-radius: 50%;
    top: 7px;
    left: 7px;
    transition: opacity 0.3s ease-out;
  } */
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
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0,0,0,0.11),
    0 24px 46px ${props => props.boxShadowColor};
  }
  &:hover ${Overlay}{
    transform: scale(4) translateZ(0);
  }
  &:hover ${Circle} {
    border-color: ${props => props.bgColorLight};

    color: white;
  }
  &:hover ${Circle}:after{
    background: ${props => props.bgColorLight};;
  }
  &:active{
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0,0,0,0.11),
    0 15px 24px ${props => props.boxShadowColor};;
  }
  &:hover ${Circle}>svg{
      color: white!important;
      transition: transform 0.3s ease-out;
  }
`;


class CardComp extends Component {
    state = {  }
    render() { 
        return (  
        <Box sx={{

          '@media screen and (min-width: 823px)': {
            position:"absolute",
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '@media screen and (max-width: 823px)': {
            marginLeft: '25px'
          }
        }}>
        {/* <div>  */}
            <Card bgColorLight={"#020202"} bgColor={"#020202"} boxShadowColor={"#0202026b"}>
                <Overlay bgColor={"#020202"}/>
                <Circle bgColor={"#020202"}>
                    <DiLinux as={"svg"} size={80} color={"#020202"}/>
                </Circle>
            </Card> 
            <Card bgColorLight={"#e94e32"} bgColor={"#e94e32"} boxShadowColor={"#e94e3280"}>
                <Overlay bgColor={"#e94e32"}/>
                <Circle bgColor={"#e94e32"}>
                    <DiGit as={"svg"} size={80} color="e94e32"/>
                </Circle>
            </Card> 
            <Card bgColorLight={"#ffeeba"} bgColor={"#ffd861"} boxShadowColor={"rgba(255, 215, 97, 0.48)"}>
                <Overlay bgColor={"#ffd861"}/>
                <Circle bgColor={"#ffd861"}>
                    <DiJsBadge as={'svg'} size={80} color="#ffd861"/>
                </Circle>
            </Card> 
            <Card bgColorLight={"#ffeeba"} bgColor={"#4d598f"} boxShadowColor={"#4d598f8f"}>
                <Overlay bgColor={"#4d598f"}/>
                <Circle bgColor={""}>
                    <DiPhp as={"svg"} icon={"php"} size={80} color="#4d598f"/>
                </Circle>
            </Card> 
            <Card bgColorLight={"#e61f24"} bgColor={"#e61f24"} boxShadowColor={"#e61f267e"}>
                <Overlay bgColor={"#e61f24"}/>
                <Circle bgColor={"#ffd861"}>
                    <DiJava as={"svg"} size={80} color={"#e61f24"}/>
                </Circle>
            </Card> 
            {/* <Card bgColorLight={"#005e87"} bgColor={"#005e87"} boxShadowColor={"#4d598f8f"}>
                <Overlay bgColor={"#005e87"}/>
                <Circle bgColor={"#005e87"}>
                    <DiMysql as={"svg"} size={80} color={"#005e87"}/>
                </Circle>
            </Card>  */}
            <Card bgColorLight={"#c76495"} bgColor={"#c76495"} boxShadowColor={"#c7649579"}>
                <Overlay bgColor={"#c76495"}/>
                <Circle bgColor={"#c76495"}>
                    <DiSass as={"svg"} size={80} color={"#c76495"}/>
                </Circle>
            </Card> 
        {/* </div>  */}
       </Box>
        );
    }
}
 
export default CardComp;