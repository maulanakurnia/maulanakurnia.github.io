import styled, {css} from 'styled-components'
import {sx, getBreakpointSize} from '../config'

const buttonToggleCollapse = (props) => {
    if (
      (
        props.expandSm ||
        props.expandMd ||
        props.expandLg ||
        props.expandXl
      ) &&
      props.toggleCollapse
    ) {
      return css`
        display: none;
        @media (max-width: ${getBreakpointSize(props)}) {
          display: block!important;
        }
      `;
    }
    if(
      props.showBg
    ) {
      return css`
        background-color: ${({theme}) => theme.gradient};
      `;
    }
};

export const Toggler = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 3px;
    :focus {
        outline: none;
    }
    :hover {
        background-color: hsla(0,0%,50%,.125);
        border-radius: 3px;
    }
    & > svg {
        fill: ${({theme}) => theme.text};
        padding-top: 2px;
    }
    :hover span {
        display: inline;
    } 
    ${(props) => buttonToggleCollapse(props)}
    ${sx};
    @media (max-width: 1025px) {
      height: 30px;
      width: 50px;
      border: 1px solid ${({theme}) => theme.gradient};
      margin-left: 10px;
      border-radius: 3px;
    }
`;

Toggler.Text = styled.span`
  margin-right: 10px;
  margin-bottom: 2px;
  display: none;
  color: ${({theme}) => theme.content};
`;
