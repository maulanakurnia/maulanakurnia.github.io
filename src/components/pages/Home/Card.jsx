import React, { Fragment } from 'react';
import { Box, Heading } from "@primer/components";
import CardComp from "../../styled/Card/CardGame";
import { DiJavascript1, DiPhp, DiReact, DiSass, DiLinux, DiGit } from "react-icons/di";
const Card = () => {
    return (
        <Fragment>
            <Heading textAlign="center" mt={50} fontSize={30} fontWeight="700" sx={{
                '@media screen and (min-width: 823px)': {
                marginBottom: "100px"
                },
                '@media screen and (max-width: 823px)': {
                marginBottom: '20px'
                }
            }}>My Game</Heading>
            <Box sx={{  display: 'inline-block',
                        justifyContent: 'center!important',

                        '@media screen and (min-width: 320px) and (max-width: 568px)': {
                        position:"absolute",
                        left: '15%',
                        transform: 'translate(-5%, -0%)',
                        },
                        '@media screen and (min-width: 360px) and (max-width: 640px)': {
                        position:"absolute",
                        left: '25%',
                        transform: 'translate(-15%, -0%)',
                        },
                        '@media screen and (min-width: 411px) and (max-width: 731px)': {
                        position:"absolute",
                        left: '25%',
                        transform: 'translate(-10%, -0%)',
                        },
                        '@media screen and (min-width: 732px)': {
                        position:"absolute",
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        },
                        '@media screen and (min-width: 768px) and (max-width: 1024px)': {
                        position:"absolute",
                        left: '5%',
                        transform: 'translate(2%, -0%)',
                        },
                        '@media screen and (min-width: 1024px) and (max-width: 1366px)': {
                        position:"absolute",
                        left: '12%',
                        transform: 'translate(-0%, -50%)',
                        } }}>
                <CardComp color="#020202" svg={<DiLinux as={"svg"} size={80} color={"#020202"}/> }/>
                <CardComp color="#e94e32" svg={<DiGit as={"svg"} size={80} color={"#e94e32"}/> }/>
                <CardComp color="#ffd861" svg={<DiJavascript1 as={"svg"} size={80} color={"#ffd861"}/> }/>
                <CardComp color="#4d598f" svg={<DiPhp as={"svg"} size={80} color={"#4d598f"}/> }/>
                <CardComp color="#61dafb" svg={<DiReact as={"svg"} size={80} color={"#61dafb"}/> }/>
                <CardComp color="#c76495" svg={<DiSass as={"svg"} size={80} color={"#c76495"}/> }/>
            </Box>
        </Fragment>
    )
}

export default Card;