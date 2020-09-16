import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif !important;
        transition: background 0.5s, color 0.6s;
    }

    .selected {
        color: #2e7ad1 !important;
        font-weight: 700 !important;
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
    .remark-code-title {
        font-size: 0.9em;
        padding: 0.5em 0.9em;
        font-weight: 600;
        margin-top:25px;
        margin-bottom: -32px;
        border-radius: 6px 6px 0px 0px;
    }
    .remark-code-title + div>div>pre {
        border-top-left-radius: 0!important;
        border-top-right-radius: 0!important;
        border-top: none;
    }
    .chakra-ui-light .remark-code-title {
        background-color: #f6f8fa;
        border: 1px solid #e1e4e8;
    }
    .chakra-ui-dark .remark-code-title {
        background-color: #1b1c1f;
        border: 1px solid rgb(39,41,46);
    }
`;
