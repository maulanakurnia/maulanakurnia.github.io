import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PropTypes from 'prop-types'
import {TYPOGRAPHY, COMMON} from '../utils/constant'
import {theme} from '../index'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { 
    ::selection {
      color: white;
      background: red;
    }
  
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
      border-radius: 6px;
    }
    a {
      text-decoration: none;
      color: ${({theme}) => theme.text};
    }
    .active {
      background-color: hsla(0,0%,50%,.125);
      border-radius: 3px;
    }
    overflow-x: hidden;
    margin: 0;
    font-family:  "Roboto", "Franklin Gothic Medium", "Arial Narrow", Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    text-align: left;
    background-color: ${({ theme }) => theme.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.5s, color 0.6s;
    summary {
      color: ${({theme}) => theme.text};
    }
  }
  table { border-collapse: collapse; }
`
const Base = props => {
  const {color, lineHeight, fontFamily, theme, ...rest} = props
  return (
    <div {...rest}>
      <GlobalStyle />
      {props.children}
    </div>
  )
}
const BaseStyles = styled(Base)`
  ${TYPOGRAPHY} ${COMMON};
`

BaseStyles.defaultProps = {
  color: 'gray.9',
  fontFamily: 'normal',
  lineHeight: 'default',
  theme
}

BaseStyles.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  theme: PropTypes.object
}
export default BaseStyles
