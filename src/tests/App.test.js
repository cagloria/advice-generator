import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Advice component", () => {
    render(<App />);
    const adviceText = screen.getByText(/Advice/i);
    expect(adviceText).toBeInTheDocument();
});
