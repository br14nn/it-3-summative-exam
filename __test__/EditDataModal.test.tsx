import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditDataModal from "@/components/MyComponents/EditDataModal/EditDataModal";

describe("Edit Data Modal", () => {
  it("should render the Edit button", () => {
    render(<EditDataModal prod_id={1} />);

    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();
  });

  it("should render the Update button", () => {
    render(<EditDataModal prod_id={1} />);

    const updateButton = screen.getByText("Update");
    expect(updateButton).toBeInTheDocument();
  });
});
