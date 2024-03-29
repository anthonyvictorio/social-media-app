import React, { useState } from "react";
import Comment from "./Comment";

function Post(props){

    const [likes, setLikes] = useState(0)

    // handles when like button is pressed
    function handleLike(){
        setLikes(likes + 1)
        console.log(likes)
    }

    return(
        <div id="post">
            <h3>{props.title}</h3>                   
            <p>{props.contents}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <p>Comments:</p>
            <Comment content="This is a test comment"/>
            <Comment content="Another test comment"/>
            <Comment content="AND ANOTHER test comment"/>
        </div>
    )
}

export default Post