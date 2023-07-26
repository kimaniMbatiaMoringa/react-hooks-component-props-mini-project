import React from "react";

function Article(props){
    let post = props.post
    return(
        <article>
            <h3 id={post.id}>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.preview}</p>
        </article>
    )

    
}

export default Article