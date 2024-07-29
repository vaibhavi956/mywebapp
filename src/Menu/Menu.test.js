import { render, screen } from "@testing-library/react";
import { Menu } from "./Menu";


describe("menu component" , ()=>{
    test("render correctly", async ()=>{
        render(<Menu menuItems={[]}/>)
        const ulRef=await screen.getByTestId('menu')
        expect(ulRef).toBeInTheDocument();
    })
    test("render with props",  async()=>{
         render(<menu menuItems={[{
            Id:   'home',
            path: 'home',
            text: 'Home'
        }]}/>)
        const listItems= await screen.getAllByRole("listitem")
        expect(listItems).toHaveLength(2)
        // expect(listItems[0].textContent).toBe("kk")
    })
})