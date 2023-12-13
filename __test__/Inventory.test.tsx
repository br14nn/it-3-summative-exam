import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InventoryLayout from "@/app/inventory/(TableView)/layout";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Inventory Layout Page", () => {
  it("should render the search box", () => {
    render(<InventoryLayout>Children</InventoryLayout>);

    const searchBox = screen.getByTestId("searchBox");
    expect(searchBox).toBeInTheDocument();
  });

  it("should render the Add Item button", () => {
    render(<InventoryLayout>Children</InventoryLayout>);

    const addItem = screen.getByText("Add Item");
    expect(addItem).toBeInTheDocument();
  });
});
