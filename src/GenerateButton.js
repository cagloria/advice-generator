import styled from "styled-components";
import { colors } from "./GlobalStyles";
import icon from "./assets/icon-dice.svg";

const Button = styled.button`
    background-color: ${colors.primary};
    background-image: url(${icon});
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
    width: 64px;
    height: 64px;
    border: 0px;
    border-radius: 50%;
    position: absolute;
    bottom: -33px;
`;

export default function GenerateButton() {
    return <Button aria-label="Generate advice" />;
}
