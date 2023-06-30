import styled from "styled-components";
import { colors } from "./GlobalStyles";
import mobileDivider from "../assets/pattern-divider-mobile.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import GenerateButton from "./GenerateButton";

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.45rem;
    padding: 2.5rem 1.3rem 3.9rem;
    background-color: ${colors.adviceBG};
    width: 91vw;
    max-width: 540px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 1rem;
    position: relative;

    &::after {
        content: "";
        background-image: url("${mobileDivider}");
        background-position: center;
        height: 16px;
        width: 100%;
        margin-top: 0.125rem;
    }

    @media screen and (min-width: 769px) {
        padding: 3.05rem 2.3rem 4.3rem;

        &::after {
            background-image: url("${desktopDivider}");
            margin-top: 1.068rem;
        }
    }
`;

const Heading = styled.h1`
    color: ${colors.primary};
    font-size: clamp(0.75rem, 2vw, 0.95rem);
    letter-spacing: 0.18rem;
    text-transform: uppercase;
    margin: 0;
`;

const Quote = styled.blockquote`
    quotes: "“" "”";
    font-size: clamp(1.438rem, 3.1vw, 1.875rem);
    line-height: clamp(2.06rem, 6.4vw, 2.35rem);
    letter-spacing: 0.005rem;
    display: inline;
    margin: 0;

    &::before {
        content: open-quote;
    }
    &::after {
        content: close-quote;
    }

    @media screen and (min-width: 769px) {
        letter-spacing: -0.07rem;
    }
`;

export default function Advice({ id, quote }) {
    return (
        <Container>
            <Heading>Advice #{id}</Heading>
            <Quote>{quote}</Quote>
            <GenerateButton />
        </Container>
    );
}

Advice.defaultProps = {
    id: 117,
    quote: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};
