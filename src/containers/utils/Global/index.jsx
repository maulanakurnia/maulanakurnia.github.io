import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* *,
  *::after,
  *::before {
    box-sizing: border-box;
  } */

body {
    /* align-items: center; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* height: 100vh; */
    /* margin: 0;
    padding: 0; */
    /* font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; */
    /* transition: all 0.25s linear; */

    margin: 0;
    font-family: 'Open Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #d3d3d3; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #023f49; 
}
`;

export default GlobalStyles;