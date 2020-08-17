import styled from 'styled-components'
import PropTypes from 'prop-types'
import {sx, theme, TYPOGRAPHY, COMMON, get} from './config'

const Heading = styled.h2`
  font-weight: ${get('fontWeights.bold')};
  font-size: ${get('fontSizes.5')};
  margin: 0;
  ${TYPOGRAPHY} ${COMMON};
  ${sx};
`

Heading.defaultProps = {
  theme
}

Heading.propTypes = {
  ...COMMON.propTypes,
  ...sx.propTypes,
  theme: PropTypes.object,
  ...TYPOGRAPHY.propTypes
}

export default Heading
