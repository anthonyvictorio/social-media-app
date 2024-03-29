import { useState } from "react"

function CreatePostForm(props){

    const [postTitle,setPostTitle] = useState("")
    const [postContent,setPostContent] = useState("")

    let titleChange = (event) => {
        setPostTitle(event.target.value)
    }

    let contentChange = (event) =>{
        setPostContent(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault()

        props.onNewSubmit({postTitle, postContent})
        console.log(postTitle)
    }


    return(
        <form onSubmit={handleSubmit}>
            <label for="title">Post Title: </label>
            <input type="text" name="title" onChange={titleChange} value={postTitle} />
            <br />
            <label for="content">Post Content: </label>
            <input type="text" name="content" onChange={contentChange} value={postContent} />
            <br />
            <button type="submit">Post It!</button>
            <br />
        </form>
    )
}

export default CreatePostForm