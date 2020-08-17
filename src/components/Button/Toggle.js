import styled from 'styled-components'

const Toggle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 20%;
    margin-right: 10px;
    background: ${({ theme }) => theme.content};
    border: 2px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    right: 0%;
    top: 40%;
    box-shadow: rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 3px 3px -1px;
    outline: none;
    &:hover{
        cursor: pointer;
    }
    svg {
        fill: ${({theme}) => theme.text};
    }
`;

export default Toggle;