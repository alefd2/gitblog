import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.5;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color-scheme: light dark;

        :focus {
            outline: 0;
            box-shadow:  0 0 0 2px ${(props) => props.theme["main-blue"]};
        }
    }

    body {
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, buton {
        font-family: Nunito, sans-serif;
        font-size: 400;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    a {
        font-weight: 500;
        color: ${(props) => props.theme["main-blue"]};
        text-decoration: inherit;
    }
    a:hover {
        color: ${(props) => props.theme["main-blue"]};
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: ${(props) => props.theme["main-blue"]};
    }
    button:focus,
        button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`
