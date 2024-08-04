"use client"

import React from 'react'
import { useDispatch } from 'react-redux'



export const Post = () => {
  const dispatch=useDispatch()
  const getPosts=()=>{
    dispatch({type:"GET_POSTS"})

  }
  return (
    <div>
      <button onClick={getPosts}>get posts</button>
      <h6>please check console after click</h6>
    </div>
  )
}
