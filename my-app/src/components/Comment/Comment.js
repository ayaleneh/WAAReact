import React from "react";
const Comment=({author,content})=>{
return(
  <div>
    <strong>{author}:</strong>
    <p>{content}</p>
  </div>
);
};
export default Comment;