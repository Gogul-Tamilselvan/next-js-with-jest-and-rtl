import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import Router from "../app/Router/page"; // your component

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("testing router", () => {
  const user = userEvent.setup();

  it("should navigate to home when button clicked", async () => {
    const push = jest.fn();

    useRouter.mockReturnValue({
      pathname: "/Router",
      push,
    });

    render(<Router />);

    const btn = screen.getByText("Home");
    await user.click(btn);

    expect(push).toHaveBeenCalledWith("/");
  });
});
