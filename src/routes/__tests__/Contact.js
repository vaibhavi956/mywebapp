// import { Accordian, List } from "vaibhavi-lib";
import React from "react";
import { Contact } from "../Contact/Contact";
import { render, screen, within } from "@testing-library/react";
// import { Table } from "react-bootstrap";

jest.mock('vaibhavi-lib', ()=>({
     __esModule: true,
     default: ({ths,data,tds}) => {
        return <table>
            <tr>
                {
                    ths.map((val)=>{
                        return <th>{val}</th>
                    })
                }
            </tr>
            {
                data.map((obj)=>{
                    return <tr>
                        {
                            tds.map((val)=>{
                                return <td>{obj[val]}</td>
                            }
                        )
                        }
                    </tr>
                })
            }
                
        </table>

     },
     Accordian: ()=>{
        return <div>Accordian</div>
     },
     List: ()=>{
        return <div>List</div>
     }
}
));

describe("contact component" , ()=>{
    it("render correctly" , ()=>{
        render(<Contact/>)
       expect(screen.getByRole("heading")).toBeInTheDocument();
    })

    it("table loading", async ()=>{
        render(<Contact/>)
        expect(await screen.getByRole("table")).toBeInTheDocument();
        expect(await screen.findAllByRole("columnheader")).toHaveLength(2);
        expect(await screen.findAllByRole("row")).toHaveLength(3);
        const rows = await screen.findAllByRole('row')
        const cells = await within(rows[1]).getAllByRole('cell')
        expect(cells).toHaveLength(2);
        expect(cells[0].textContent).toBe("sachin")

    })

    it("Accordian loading" , async ()=>{
        render(<Contact/>)
       expect(await screen.getByText("Accordian")).toBeInTheDocument();
    })

    it("List loading" , async ()=>{
        render(<Contact/>)
       expect(await screen.getByText("List")).toBeInTheDocument();
    })
})