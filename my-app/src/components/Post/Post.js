import React from "react";
const Post =({author,title,content,onClick})=>{
  return(
    <div onClick={onClick}>
      <h2>{author}</h2>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default Post;