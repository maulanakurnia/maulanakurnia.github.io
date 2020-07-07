import React from 'react';
import {Icon} from 'semantic-ui-react';
import styled, { ThemeProvider, css} from 'styled-components';
import px2vw from './utils/px2vw';
const theme = {
    twitter: '#55ACEE',
    github: '#24292e',
    instagram: '#49769C',
    primary: '#55ACEE',
    secondary: 'green',
    alert: 'yellow',
    font: 'sans-serif'
}


const Button = styled.button`
    font-family: ${(props) => props.theme.font};
    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0px solid;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #ffff;
    outline:none;
    margin: ${px2vw(5)};
    ${(props) => 
        props.color &&
        css`
            background: ${(props) => props.theme[props.color]};
    `};
    &:hover{
        ${(props) => 
            props.color &&
            css`
            background: ${(props) => props.theme[props.color + "96"]};
        `};
        transform: translate3d(0, -2px, 0);
        -webkit-transform: translate3d(0, -2px, 0)
    }
`;



const ButtonSocial = () => (
    <ThemeProvider theme={theme}>
        <div>
            <a href="https://www.twitter.com/maulanaakurniaa">
                <Button color='twitter'>
                    <Icon name='twitter' /> Twitter
                </Button>
            </a>
            <a href="https://www.github.com/maulanakurnia">
                <Button color='github'>
                    <Icon name='github' /> Github
                </Button>
            </a>
            <a href="https://www.instagram.com/maulanaakurniaa">
                <Button color='instagram'>
                    <Icon name='instagram' /> Instagram
                </Button>
            </a>
        </div>
    </ThemeProvider>
)

export default ButtonSocial 