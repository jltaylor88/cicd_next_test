

import { render, screen } from "@testing-library/react";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import Home from "../pages";



it("should render the NextJS welcome title", () => {
  render(<Home />);
  const title = screen.getByRole("heading", { name: "Welcome to Next.js!" });
});

it("should render the custom header", () => {
  render( <CustomHeader /> );
  const customHeader = screen.getByText(/I am a custom header/i);
  expect(customHeader).toBeTruthy()
});
