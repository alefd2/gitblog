import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

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
        font-family: 400 1rem Nunito, sans-serif;
    }
`
