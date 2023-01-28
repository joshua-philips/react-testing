import { fireEvent, render, RenderResult } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Counter initialCount={0} />);
  });

  it("displays correct initial amount", () => {
    const countValue = Number(component.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("increments by 1 if the increment button is clicked", () => {
    const incrementButton = component.getByRole("button", {
      name: "Increment",
    });

    const countValue1 = Number(component.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    fireEvent.click(incrementButton);
    const countValue2 = Number(component.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });
});
