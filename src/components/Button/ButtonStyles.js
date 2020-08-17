import {css} from 'styled-components'
import {get} from '../config'

export default css`
  position: relative;
  display: inline-block;
  padding: 6px 16px;
  font-weight: ${get('fontWeights.bold')};
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: ${get('radii.1')};
  appearance: none;
  text-decoration: none;
  text-align: center;
  margin-left: 5px;

  & > svg {
    padding-top: 3px;
    margin-right: 5px;
    font-size: 15px;
    align-self: center;
    flex-shrink: 0;
  }
  &:hover {
    // needed to override link styles
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  &:disabled svg {
    opacity: 0.6;
  }
`
