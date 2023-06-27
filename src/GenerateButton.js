import styled from "styled-components";
import { colors } from "./GlobalStyles";
import icon from "./assets/icon-dice.svg";

const Button = styled.button`
    background-color: ${colors.primary};
    background-image: url(${icon});
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
    width: 4rem;
    height: 4rem;
    border: 0px;
    border-radius: 50%;
    position: absolute;
    bottom: -2.1rem;
`;

export default function GenerateButton() {
    return <Button aria-label="Generate advice" />;
}
