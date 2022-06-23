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
        --purple: #6439FF;
        --main-radius: 5px;
        --main-padding: 5px;
    }
`