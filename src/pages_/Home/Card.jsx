import React, { Fragment } from 'react';
import { Heading } from "@primer/components";
import CardComp from "../../__components/CardGame";
import { DiJavascript1, DiPhp, DiReact, DiSass, DiLinux, DiGit } from "react-icons/di";
import Wrapper from '../../__components/Wrapper';
const Card = () => {
    return (
        <Fragment>
            <Heading as={Wrapper} mt={20} mb={10}  fontSize={30} fontWeight="700">My Game</Heading>
            <Wrapper size={131}>
                <CardComp color="#020202" svg={<DiLinux as={"svg"} size={80}/> }/>
                <CardComp color="#e94e32" svg={<DiGit as={"svg"} size={80} color={"#e94e32"}/> }/>
                <CardComp color="#ffd861" svg={<DiJavascript1 as={"svg"} size={80} color={"#ffd861"}/> }/>
                <CardComp color="#4d598f" svg={<DiPhp as={"svg"} size={80} color={"#4d598f"}/> }/>
                <CardComp color="#61dafb" svg={<DiReact as={"svg"} size={80} color={"#61dafb"}/> }/>
                <CardComp color="#c76495" svg={<DiSass as={"svg"} size={80} color={"#c76495"}/> }/>
            </Wrapper>
        </Fragment>
    )
}

export default Card;