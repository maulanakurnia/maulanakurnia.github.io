import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif !important;
        transition: background 0.5s, color 0.6s;
    }

    a {
        text-decoration: none !important;
    }

    .selected {
        color: black !important;
    }

    .chakra-ui-dark .selected {
        color: #2e7ad1 !important;
    }

    .chakra-ui-dark .custom_Icon {
        background-color: transparent;
    }
    .chakra-ui-dark .custom_Search{
        background-color: #1B1B1B;
    }
    .chakra-ui-dark .custom_Search:hover{
        background-color:rgba(255,255,255,0.06);
    }

    .chakra-ui-dark .css-xhsysdk:hover {
        background-color: rgba(255,255,255,0.06);
    }

    .chakra-ui-light .customIcon {
        color: #363537 !important;
    }

    .custom_Icon {
        width: 35px!important;
        height: 35px!important;
        margin-top: -4px;
    }

    .chakra-ui-dark {
        background: #111216 !important;
    }

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    ::selection {
        background-color: #c5e3ff;
        color: black;
    }
`