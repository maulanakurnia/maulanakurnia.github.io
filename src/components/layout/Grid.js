import styled from 'styled-components'
import {theme, GRID, FLEX} from '../config'
import Box from './Box'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, ${props => props.size}px);
    gap:5px;
    ${GRID};
    ${FLEX};
`

Grid.defaultProps = {
  theme,
  display: 'grid'
}

Grid.propTypes = {
  ...Box.propTypes,
  ...GRID.propTypes,
  ...FLEX.prototype
}

export default Grid
