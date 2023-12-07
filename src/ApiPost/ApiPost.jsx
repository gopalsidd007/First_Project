import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const ApiPost = () => {
let api_url="https://jsonplaceholder.typicode.com/posts"
let [state,setState]=useState([])

useEffect(()=>{
  axios.get(api_url)
  .then((res)=>{
    console.log("Api data",res.data);
    setState(res.data)
  })
  .catch((err)=>{
console.log("Api unfatched",err);
  })
})


  return (
    <div>
      <h1 className='text-center'>ApiPost</h1>
      {
        state.map((post)=>(
          <React.Fragment key={post.id} >
          <h1>user id:{post.userId}</h1>
          <h2>Title:{post.title}</h2>
          <p>{post.body}</p>
          <hr></hr>
          </React.Fragment>
        ))
      }
    </div> 
  )
}

export default ApiPost