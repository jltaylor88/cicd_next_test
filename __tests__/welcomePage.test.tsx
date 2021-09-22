import { render, screen } from "@testing-library/react";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import Home from "../pages";
describe("Homepage tests", () => {
  it("should render the NextJS welcome title", () => {
    render(<Home />);
    const title = screen.getByRole("heading", { name: "Welcome to Next.js!" });
  });

  it("should render the custom header", () => {
    render(<CustomHeader />);
    const customHeader = screen.getByText(/I am a custom header/i);
    expect(customHeader).toBeTruthy();
  });

  it("should render the link for visiting the deploy page", () => {
    render(<Home />);
    const link = screen.getByTestId("how_to_deploy-link");
    expect(link).toBeInTheDocument();
  });
});
