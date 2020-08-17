import styled from 'styled-components'
import PropTypes from 'prop-types'
import {sx, theme, TYPOGRAPHY, COMMON} from './config'

const Text = styled.span`
  ${TYPOGRAPHY};
  ${COMMON};
  ${sx};
`
Text.defaultProps = {
  theme
}

Text.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  ...sx.propTypes,
  theme: PropTypes.object
}

export default Text