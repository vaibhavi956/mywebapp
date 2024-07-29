import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";

jestConfig.mock('react-bootstrap/Carousel',()=>{
    return {
        __esModule: true,
        default: () => {
            return <div>Carousel component</div>
        }
    }
})



describe('Home component test',()=>{
    test("render correctly", async()=>{
    render(<Home/>)
    // const eleRef= await screen.getByText("heading", {name:'ss'})
    // expect(eleRef).toBeInTheDocument();
    expect(await screen.getByText("Carousel component")).toBeInTheDocument();
    
    })
})