import { createGlobalStyle } from "styled-components";
import img from "./App/img/MoneyBackground.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.8;
        color: rgb(49, 49, 49);
        margin: 20px auto;
        background-color: rgba(245, 245, 245, 0.521);
        background-image: url(${img});
        background-blend-mode: soft-light;
    }
`;