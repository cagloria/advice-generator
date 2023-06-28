import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import Advice from "./Advice";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    padding: 17.9vh 0 25vh;

    @media screen and (min-width: 769px) {
        padding: 24.6vh 0px 25vh;
    }
`;

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Advice />
            </Main>
        </>
    );
}
