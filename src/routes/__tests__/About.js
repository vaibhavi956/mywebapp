import { About } from "../About/About";
import { render , screen } from "@testing-library/react";
import { expect } from "playwright/test";


jest.mock('vaibhavi-lib',()=>{
    class bus{
        fw=2;
        bw=4;
        totalwheels(){ return 6}
        getcolor(){ return 'red'}
    }

return {
    name: "virat",
    location: "Banglore",
    add: (x, y) => {
        return 100;
    },
    bus: bus
}
})

describe("About component", () => {
    it("render correctly", async () => {
        render(<About />)
        const eleRef = await screen.getByRole("heading", { name: "About" })
        expect(eleRef).toBeInTheDocument();
    })
    test("test add function", () => {
        render(<About />)
        const ref = screen.getByTestId('add')
        expect(ref.textContent).toBe("100")
    })
    test("test bus class", () => {
        render(<About />)
        const ref = screen.getByTestId('bus')
        expect(ref.textContent).toBe("2-4 - 6 - red")
    })
    test("test name location class", () => {
        render(<About />)
        const ref = screen.getByTestId('name')
        expect(ref.textContent).toBe("virat..........Banglore")
    })
 })