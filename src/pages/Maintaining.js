import React from 'react';
import styled from 'styled-components'
import {AiFillSetting} from 'react-icons/ai'

var Width = window.innerWidth;

const Wrapper = styled.div`
    position: absolute;
    top: 40%;
    max-width: 100%;
    @media(max-width: ${Width}){
        width: ${Width}
    }
    ${console.log(Width)}
    // left: 40%;
    width: 768px;
    @media(max-width: 1020px){
        & > span {
            font-size: 17px!important;
        }
    }
    @media(min-width: 1020px){
        left: 30%;
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
        justify-content: center;
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
        <span><br></br>We'r working hard to bring New Version</span>
    </Wrapper>)
}

export default Maintaining;