import styled from 'styled-components'

const Toggle = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 20%;
    margin-right: 10px;
    background: ${({ theme }) => theme.text};
    border: 2px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    right: 0%;
    top: 40%;
    box-shadow: 0 15px 24px rgba(255,255,255,0.11);
    outline: none;
    &:hover{
        cursor: pointer;
    }
    svg {
        color: ${({theme}) => theme.body};
    }
`;

export default Toggle;