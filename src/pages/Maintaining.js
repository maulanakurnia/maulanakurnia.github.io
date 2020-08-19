import React from 'react';
import styled from 'styled-components'
import {AiFillSetting} from 'react-icons/ai'
import {Container, Text, Flex, Button} from '../components'
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Wrapper = styled(Container)`
    margin-top: 40vh;
    @media(max-width: 1020px){
        & > span {
            font-size: 17px!important;
        }
    }
    display: block;
    text-align: center;

    & > h1 {
        color: #f9c513;
        margin-bottom: -7px;
    }
    & span {
        font-size: 20px;
    }
    & > svg {
        font-size: 100px;
        animation: svg infinite 10s linear;

    }
    @keyframes svg{
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Maintaining = () => {
    return(
    <Wrapper>
            <AiFillSetting/>
            <Text as="h3" sx={{marginBottom: '-15px'}}>Sorry</Text>
            <span><br></br>We'r working hard to bring New Version</span>
            <Flex justifyContent="center" mt={12}>
                <Button primary onClick={()=> window.open("https://twitter.com/maulanaakurniaa", "_blank")}><FaTwitter/>Twitter</Button>            
                <Button onClick={() => window.open("https://instagram.com/maulanaakurniaa", "_blank")}><FaInstagram/>Instagram</Button>            
                <Button dark onClick={()=> window.open("https://github.com/maulanakurnia", "_blank")}><FaGithub/>Github</Button>            
            </Flex>
    </Wrapper>)
}

export default Maintaining;