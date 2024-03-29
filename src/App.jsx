import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Post from './components/Post'
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