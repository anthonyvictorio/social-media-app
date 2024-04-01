import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

function Post(props){

    const [likes, setLikes] = useState(0)
    const [comments, setComment] = useState([])

    // handles when like button is pressed
    function handleLike(){
        setLikes(likes + 1)
        console.log(likes)
    }

    let addComment = (data) => {  
        setComment([...comments, data])
      }

    return(
        <div id="post">
            <h3>{props.title}</h3>                   
            <p>{props.contents}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <p>Comments:</p>
            <CommentForm onNewSubmit={addComment}/>
            <Comment content="This is a test comment"/>
            <CommentFeed comments={comments}/>
        </div>
    )
}

export default Post