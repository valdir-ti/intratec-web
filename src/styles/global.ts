import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-size: 14;
    }

    :root {
        --main: #7481F8;
        --second: #ECE8FF;
        --purple: #6439FF;
        --lightgray: #ddd;
        --darkgray: #888;
        --white: #fff;
        --main-radius: 5px;
        --main-padding: 5px;
    }
`