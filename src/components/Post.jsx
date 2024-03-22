import React from "react";
import Comment from "./Comment";

function Post(){
    return(
        <div>
            <h3>Test Post</h3>
            <p>This is a test post</p>
            <p>Likes: 30</p>
            <p>Comments:</p>
            <Comment content="This is a test comment"/>
            <Comment content="another test comment"/>
            <Comment content="AND ANOTHER test comment"/>
        </div>
    )
}

export default Post