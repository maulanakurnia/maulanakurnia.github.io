import styled, {css} from 'styled-components'
import {theme, sx, get} from '../config'
import ButtonBase, {systemStyles} from './ButtonBase'

const buttonStyle = (props) => {
  if(props.primary){
    return css`
      background-color: ${get('buttons.primary.bg.default')};
      color: ${get('buttons.primary.color.default')};
      border: none;

      &:hover {
        background-color: ${get('buttons.primary.bg.hover')};
        border-color: ${get('buttons.primary.border.hover')};
      }
    
      &:focus {
        border-color: transparent;
        background-color: ${get('buttons.primary.bg.focus')};
      }
    
      &:active {
        background-color: ${get('buttons.primary.bg.active')};
        box-shadow: ${get('buttons.primary.shadow.active')};
        border-color: ${get('buttons.primary.border.active')};
      }
    
      &:disabled {
        color: ${get('buttons.primary.color.disabled')};
        background-color: ${get('buttons.primary.bg.disabled')};
        border-color: ${get('buttons.primary.border.disabled')};
        cursor: not-allowed;
      }
    `;
  } else if(props.success){
    return css`
      background-color: ${get('buttons.success.bg.default')};
      color: ${get('buttons.success.color.default')};
      border: none;

      &:hover {
        background-color: ${get('buttons.success.bg.hover')};
        border-color: ${get('buttons.success.border.hover')};
        color: ${get('buttons.success.color.default')}
      }
    
      &:focus {
        border-color: transparent;
        background-color: ${get('buttons.success.bg.focus')};
      }
    
      &:active {
        background-color: ${get('buttons.success.bg.active')};
        box-shadow: ${get('buttons.success.shadow.active')};
        border-color: ${get('buttons.success.border.active')};
      }
    
      &:disabled {
        color: ${get('buttons.success.color.disabled')};
        background-color: ${get('buttons.success.bg.disabled')};
        border-color: ${get('buttons.success.border.disabled')};
        cursor: not-allowed;
      }
    `;
  } else if(props.warning){
    return css`
      background-color: ${get('buttons.warning.bg.default')};
      color: ${get('buttons.warning.color.default')};
      border: none;

      &:hover {
        background-color: ${get('buttons.warning.bg.hover')};
        border-color: ${get('buttons.warning.border.hover')};
        color: ${get('buttons.warning.color.default')}
      }
    
      &:focus {
        border-color: transparent;
        background-color: ${get('buttons.warning.bg.focus')};
      }
    
      &:active {
        background-color: ${get('buttons.warning.bg.active')};
        box-shadow: ${get('buttons.warning.shadow.active')};
        border-color: ${get('buttons.warning.border.active')};
      }
    
      &:disabled {
        color: ${get('buttons.warning.color.disabled')};
        background-color: ${get('buttons.warning.bg.disabled')};
        border-color: ${get('buttons.warning.border.disabled')};
        cursor: not-allowed;
      }
    `;
  } else if(props.danger){
    return css`
      background-color: ${get('buttons.danger.bg.default')};
      color: ${get('buttons.danger.color.default')};
      border: none;

      &:hover {
        background-color: ${get('buttons.danger.bg.hover')};
        border-color: ${get('buttons.danger.border.hover')};
        color: ${get('buttons.danger.color.default')}
      }
    
      &:focus {
        border-color: transparent;
        background-color: ${get('buttons.danger.bg.focus')};
      }
    
      &:active {
        background-color: ${get('buttons.danger.bg.active')};
        box-shadow: ${get('buttons.danger.shadow.active')};
        border-color: ${get('buttons.danger.border.active')};
      }
    
      &:disabled {
        color: ${get('buttons.danger.color.disabled')};
        background-color: ${get('buttons.danger.bg.disabled')};
        border-color: ${get('buttons.danger.border.disabled')};
        cursor: not-allowed;
      }
    `;
  } else if (props.dark) {
    return css`
      background-color: ${get('buttons.dark.bg.default')};
      color: ${get('buttons.dark.color.default')};
      border: none;

      &:hover {
        background-color: ${get('buttons.dark.bg.hover')};
        border-color: ${get('buttons.dark.border.hover')};
        color: ${get('buttons.dark.color.default')}
      }
    
      &:focus {
        border-color: transparent;
        background-color: ${get('buttons.dark.bg.focus')};
      }
    
      &:active {
        background-color: ${get('buttons.dark.bg.active')};
        box-shadow: ${get('buttons.dark.shadow.active')};
        border-color: ${get('buttons.dark.border.active')};
      }
    
      &:disabled {
        color: ${get('buttons.dark.color.disabled')};
        background-color: ${get('buttons.dark.bg.disabled')};
        border-color: ${get('buttons.dark.border.disabled')};
        cursor: not-allowed;
      }
    `;
  }
  else {
    return css`
      color: ${get('buttons.default.color.default')};
      background-color: ${get('buttons.default.bg.default')};
      border: none;
      
      &:hover {
        background-color: ${get('buttons.default.bg.hover')};
        border-color: ${get('buttons.default.border.hover')};
      }
      
      &:focus {
        border-color: transparent;
        box-shadow: ${get('buttons.default.shadow.focus')};
      }
    
      &:active {
        background-color: ${get('buttons.default.bg.active')};
        box-shadow: ${get('buttons.default.shadow.active')};
        border-color: ${get('buttons.default.border.active')};
      }
    
      &:disabled {
        color: ${get('buttons.default.color.disabled')};
        background-color: ${get('buttons.default.bg.disabled')};
        border-color: ${get('buttons.default.border.disabled')};
    `;
  }
}

const Button = styled(ButtonBase)`
  ${(props) => buttonStyle(props)};
  ${systemStyles}
  ${sx};
`

Button.defaultProps = {
  theme
}

Button.propTypes = {
  ...ButtonBase.propTypes,
  ...sx.propTypes
}

export default Button
