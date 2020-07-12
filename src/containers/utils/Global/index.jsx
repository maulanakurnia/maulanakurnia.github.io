import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* *,
  *::after,
  *::before {
    box-sizing: border-box;
  } */

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-family: 'Open Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.5s,
              color 0.6s;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.select{
  -webkit-user-select: text;
   -khtml-user-select: text;
     -moz-user-select: text;
       -o-user-select: text;
          user-select: text;
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