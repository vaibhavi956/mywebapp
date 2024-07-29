"use client"
import React, { Fragment,useState } from 'react'
import style from './Count.module.css'
export const Count = () => {
  const [count,setCount]=useState(0)
  const fnIncreament=()=>{
    setCount(count+1);
  }
  return (<Fragment>
    <div data-testid="count" className={style.clr}>Count</div>
    <h3>{count}</h3>
    <button onClick={fnIncreament}>Increament</button>
    </Fragment> )
}
