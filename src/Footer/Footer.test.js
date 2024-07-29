import { render,screen } from "@testing-library/react";
import { Footer } from "./Footer";


describe("Footer component test" , () =>{
    test("render correctly", async()=>{
        render(<Footer/>)
        expect(await screen.getByText(/rights belons to me/i)).toBeInTheDocument();
    })
})