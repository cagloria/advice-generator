import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "hsl(150, 100%, 66%)",
    primaryGlow: "hsl(150deg 100% 66.08% / 51%)",
    text: "hsl(193, 38%, 86%)",
    adviceBG: "hsl(217, 19%, 24%)",
    background: "hsl(218, 23%, 16%)",
};

export const GlobalStyle = createGlobalStyle`
    body { 
        font-family: 'Manrope', sans-serif;
        color: ${colors.text};
        background-color: ${colors.background};
        margin: 0;
    }

    #root, main {
        height: 100%;
    }
`;
