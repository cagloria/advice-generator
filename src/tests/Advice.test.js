import { render, screen } from "@testing-library/react";
import Advice from "../components/Advice";

test("renders GenerateButton component", () => {
    render(<Advice />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});
