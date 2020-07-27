import styled from 'styled-components';

const Cover = styled.div`
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    width: 100%;
    object-fit: cover;
    min-height: 300px;
    height: calc(30vh);
    border-bottom: 1px solid #839296;
    background-image: url(${props => props.imageUrl});
`;

export default Cover;