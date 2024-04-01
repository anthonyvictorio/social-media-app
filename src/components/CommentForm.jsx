import { useState } from "react";

function CommentForm(props) {

     const [comment, setComment] = useState("")
     
     let commentChange = (event) => {
        setComment(event.target.value)
     }

     let handleSubmit = (event) => {
        event.preventDefault()

        props.onNewSubmit({comment})
        console.log(comment)
    }

     return(
        <form onSubmit={handleSubmit}>
            <label for="comment">comment:</label>
            <input type="text" name="comment" onChange={commentChange} value={comment}/>
            <button type="submit">Comment</button>
        </form>
    )
}

export default CommentForm