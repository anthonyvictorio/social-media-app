import React, { useState } from "react";
import Comment from "./Comment";

function Post(){

    const [likes, setLikes] = useState(0)

    // handles when like button is pressed
    function handleLike(){
        setLikes(likes + 1)
        console.log(likes)
    }

    return(
        <div>
            <h3>Test Post</h3>
            <p>This is a test post</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <p>Comments:</p>
            <Comment content="This is a test comment"/>
            <Comment content="another test comment"/>
            <Comment content="AND ANOTHER test comment"/>
        </div>
    )
}

export default Post