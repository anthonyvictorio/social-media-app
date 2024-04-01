import { useState } from 'react'
import React from 'react'
import Comment from './Comment'


function CommentFeed(props) {

  let commentList = props.comments.map((data)=>{
    return(
        <Comment content={data.comment} />
    )
  })
  
  return(
    <div>
      <div>{commentList}</div>
    </div>
  )
}

export default CommentFeed