import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should render the h1 of home page", () => {
  render(<Home />);

  const homeH1 = screen.getByText("Simple Invetory Management System");
  expect(homeH1).toBeInTheDocument();
});
