import React from "react";
import Article from "./Article";

function ArticleList(props){
    let posts = props.posts
    //alert(posts)
    return(
        <main>
            {posts.map((post)=>{
                return <Article post={post} />     //You can create an array of components using a template and passing it through the .map method.
            })}
        </main>
    )
}

export default ArticleList