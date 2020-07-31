import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, ${props => props.size}px);
    gap:5px;
    justify-content: center;
    padding-bottom: 5px;
`;