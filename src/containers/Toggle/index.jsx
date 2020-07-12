import styled from 'styled-components'

const Toggle = styled.button`
    width: 50px;
    height: 50px;
    border-top-left-radius: 20%;
    border-bottom-left-radius: 20%;
    background: #fff;
    border: 2px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    transition: all 0.3s ease-out;
    right: 0%;
    top: 40%;
    box-shadow: 0 15px 24px rgba(255,255,255,0.11);
    outline: none;
    &:hover{
        cursor: pointer;
    }
    svg {
        color: black;
    }
`;

export default Toggle;