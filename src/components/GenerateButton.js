import styled from "styled-components";
import { colors } from "./GlobalStyles";
import icon from "../assets/icon-dice.svg";

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
    transition: box-shadow 0.4s ease-out, filter 0.4s ease-out;

    &:hover {
        box-shadow: ${colors.primaryGlow} 0rem 0rem 20px 11px;
        cursor: pointer;
    }

    &:active {
        box-shadow: ${colors.primaryGlow} 0rem 0rem 6px 6px;
        filter: brightness(2.5);
    }
`;

export default function GenerateButton({ onClick }) {
    return <Button aria-label="Generate new quote" onClick={onClick} />;
}
