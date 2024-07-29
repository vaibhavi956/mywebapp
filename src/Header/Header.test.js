import { Header } from "./Header";
import { render,screen } from '@testing-library/react'

describe("header component", ()=>{
    it("header content check", ()=>{
        render(<Header></Header>)
        const eleRef=screen.getByTestId("header")
        expect(eleRef.textContent).toBe('My first next app')
    } )
    
    test("header text length", ()=>{
        render(<Header></Header>)
        const eleRef=screen.getByTestId("header")
        expect(eleRef.textContent).toHaveLength(17)
    } )
    

    
})