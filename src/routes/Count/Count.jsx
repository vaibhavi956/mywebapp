"use client"
import React, { Fragment,useState } from 'react'
import style from './Count.module.css'
import { useSelector } from 'react-redux'

export const Count = () => {

  const [count,setCount]=useState(0)
  const {photos}=useSelector((state)=>{
 return{
  photos:state.appReducer.photos
 }
  })

  const fnIncreament=()=>{
    setCount(count+1);
  }
  return (<Fragment>
    <div data-testid="count" className={style.clr}>Count</div>
    <h3>{count}</h3>
    <button onClick={fnIncreament}>Increament</button>

    {
            photos.length > 0 && <ol>
                {
                    photos.map(({ title, thumbnailUrl }, index) => {

                        return <li key={index}>
                            <div>{title}</div>
                            <img src={thumbnailUrl} />
                        </li>

                    })
                }
            </ol>
        }
    </Fragment> )
}
