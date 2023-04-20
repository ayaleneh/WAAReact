import React,{useState} from "react";
import Post from "../../components/Post/Post";
import PostDetails from "../../components/PostDetails/PostDetails";


const Posts =({Posts, onDelete })=>{
const [selectedPost, setSelectedPost]= useState(null);
const handleClick=(id)=>{
  setSelectedPost(id);
}
const handleDelete=(id)=>{
  onDelete(id);
  setSelectedPost(null);
};
return(
  <div>
    {selectedPost?(
    <PostDetails postId={selectedPost} onDelete={handleDelete}/>
    ):(
      Posts.map((post)=>(
        <Post
        key={post.id}
        title={post.title}
        content={post.content}
        onClick={()=>handleClick(post.id)}
        />
      ))
    )}
  </div>
);
};
export default Posts;