import { useState } from 'react'
import React from 'react'
import Post from './Post'
import CreatePostForm from './CreatePostForm'


function Feed(props) {

  let postList = props.posts.map((data)=>{
    return(
        <Post title={data.postTitle} contents={data.postContent} />
    )
  })
  
  return(
    <div>
      <div>{postList}</div>
    </div>
  )
}

export default Feed