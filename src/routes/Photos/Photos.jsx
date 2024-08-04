"use client"
import React from 'react'
import './photos.css'
import { photosAction } from '@/redux/action/photosAction'
export const Photos = () => {
  
  return (
    <div>
    <div className="photos">Photos</div>
    <button onClick={photosAction}>get photos</button>
    </div>
  )
}
