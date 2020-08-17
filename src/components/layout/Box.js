import styled from 'styled-components'
import PropTypes from 'prop-types'
import {theme, sx, COMMON, FLEX, LAYOUT} from '../config'

const Box = styled.div`
  ${COMMON}
  ${FLEX}
  ${LAYOUT}
  ${sx};
`

Box.defaultProps = {theme}

Box.propTypes = {
  ...COMMON.propTypes,
  ...FLEX.propTypes,
  ...LAYOUT.propTypes,
  ...sx.propTypes,
  theme: PropTypes.object
}

export default Box
