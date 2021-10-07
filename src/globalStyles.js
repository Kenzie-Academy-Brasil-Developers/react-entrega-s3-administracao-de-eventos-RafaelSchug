import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: sans-serif;
        text-align: center;
    }

    body, header {
        min-width: 280px;
    }

    :root {
        --toastify-color-light: #fff;
        --toastify-color-dark: #121212;
        --toastify-color-info: #3498db;
        --toastify-color-success: #2aa0dd;

    }

    .Toastify__toast-theme--colored.Toastify__toast--default {
        background: black;
        font-weight: bold;
        color: #fff;
    }

    .Toastify__toast-theme--colored.Toastify__toast--success {
        font-weight: bold;
    }
    
    .Toastify__toast-container--top-right {
        top: 4em;
    }

`

export default GlobalStyle;