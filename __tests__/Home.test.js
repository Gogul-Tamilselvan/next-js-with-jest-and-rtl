import { render, screen } from "@testing-library/react";
import Hello from "../app/page";

describe("Home Component", () => {
  it("renders a heading", () => {
    render(<Hello />);
    const heading = screen.getByRole('heading', { level: 1 });
    const hi = screen .getByText(/hi/i)
    expect(heading).toBeInTheDocument();
    expect(hi).toBeInTheDocument();
    
  });
});
