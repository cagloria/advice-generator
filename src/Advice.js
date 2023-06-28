import styled from "styled-components";
import { colors } from "./GlobalStyles";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import GenerateButton from "./GenerateButton";

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.55rem;
    padding: 2.5rem 1.3rem 3.9rem;
    background-color: ${colors.adviceBG};
    border-radius: 10px;
    margin: 0 1rem;
    width: 91vw;
    max-width: 400px;
    box-sizing: border-box;
    position: relative;

    &::after {
        content: "";
        background-image: url("${mobileDivider}");
        background-position: center;
        height: 16px;
        width: 100%;
        margin-top: -2px;
    }
`;

const Heading = styled.h1`
    color: ${colors.primary};
    font-size: 0.75rem;
    letter-spacing: 0.175rem;
    text-transform: uppercase;
    margin: 0;
`;

const Quote = styled.blockquote`
    quotes: "“" "”";
    font-size: 1.46rem;
    line-height: 2.07rem;
    letter-spacing: 0.005rem;
    display: inline;
    margin: 0;

    &::before {
        content: open-quote;
    }
    &::after {
        content: close-quote;
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
