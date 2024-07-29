import { render ,screen,fireEvent} from "@testing-library/react";
import { Count } from "./Count";
import { expect } from "playwright/test";


describe("Count Component test",()=>{
 test("render correctly",()=>{
  render(<Count/>)
  const eleRef=screen.getByTestId("count")
  expect(eleRef).toBeInTheDocument();
 });
 it("check initial count", () => {
    render(<Count />)
    const h1Ref = screen.getByRole("heading")
    expect(h1Ref.textContent).toBe('0')
})
it("check  count value on button click", () => {
    render(<Count />)
    const h1Ref = screen.getByRole("heading")
    const btnRef = screen.getByRole("button");
    for (let i = 0; i < 5; i++) {
        fireEvent.click(btnRef)
    }
    expect(h1Ref.textContent).toBe("5")
})
})