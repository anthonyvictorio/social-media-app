import { useState } from 'react'
import './App.css'
import React from 'react'
import Feed from './components/Feed'
import CreatePostForm from './components/CreatePostForm'

function App() {
  
  const [post, setPosts] = useState([])

  let createPost = (data) => {  
    setPosts([...post, data])
  }

  return(
    <div>
      <h1>Fakebook!</h1>

      {/* CreatePostForm */}
      <CreatePostForm onNewSubmit={createPost}/>
      
      <Feed posts={post}/>

    </div>
  )
}

export default App