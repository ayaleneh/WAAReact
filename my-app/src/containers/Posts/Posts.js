import React from "react";
import Post from "../../components/Post/Post";

const Posts=({posts})=>{
  return(
    <div>
      {posts.map((post)=>(
        <Post key={post.key} title={post.title} content={post.content }/>
      ))}
    </div>
  );
};
export default Posts;