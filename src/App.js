import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import Advice from "./Advice";

// TODO: Overlay image upon site to compare desktop design

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    padding: 17.9vh 0 15vh;
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
