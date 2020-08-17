import styled from 'styled-components';
import {sx, COMMON, FLEX} from './config'
export default styled.div`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    background-image: url(${props => props.Href});
    background-size: 200px 200px;
    border: 1px solid #839296;
    display: flex;
    ${sx};
    ${COMMON};
    ${FLEX};
`;