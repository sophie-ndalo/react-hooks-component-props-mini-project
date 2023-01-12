import React from "react";
import blogData from "../data/blog";
import Article from "../components/Article";


function ArticleList (){
    return(
      
      <main>
      {blogData.posts.map((post)=>(
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
      </main>
      
    );
}
export default ArticleList;