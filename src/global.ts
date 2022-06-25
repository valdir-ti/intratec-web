import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --main: #7481F8;
        --second: #ECE8FF;
        --purple: #6439FF;
        --lightgray: #ddd;
        --darkgray: #888
        --main-radius: 5px;
        --main-padding: 5px;
    }
`