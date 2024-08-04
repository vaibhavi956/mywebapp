"use client"
import React from 'react'
import {name,location,add,bus} from  'vaibhavi-lib'
import { photosAction } from '@/redux/action/photosAction'
export const About = () => {
    const busObj = new bus()
    
    return (
        <div>
            <h2>About</h2>
            <h3 data-testid='name'>{name}..........{location}</h3>

            <h3 data-testid='add'>{add(3,4)}</h3>
            
            <h3 data-testid="bus">{new bus().fw}-{new bus().bw} - {new bus().totalwheels()} - {new bus().getcolor()}</h3>
            <button onClick={photosAction}>get photos</button>
            
        </div>
    )
}
