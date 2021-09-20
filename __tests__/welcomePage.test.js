import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

it("should render the NextJS welcome title", () => {
  render(<Home />);
  const title = screen.getByRole("heading", { name: "Welcome to Next.js!" });
});
