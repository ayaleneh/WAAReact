import React, {useState, useEffect} from "react";
import axios from 'axios';
import Comment from "../Comment/Comment";


const PostDetails =({postId, onDelete})=>{
const [post, setPost]= useState(null);
const [comments, setComments] = useState([]);

useEffect(()=>{
  const fetchPost= async()=>{
    const response= await axios.get('/api/posts/${postId}');
    setPost(response.data);
  };
  const fetchComments= async ()=>{
  const response= await axios.get('/api/posts/${postId}/comments');
  setComments(response.data);
  };
  fetchPost();
  fetchComments();
},[postId]);
const deletePost= async ()=>{
  await axios.delete('/api/posts/${postId}');
  onDelete(postId);
};
if(!post){
  return <div>Loading..</div>
}
return(
  <div>
    <h2>{post.title}</h2>
    <h3>Author: {post.author}</h3>
    <p>{post.content}</p>
    <button onClick={deletePost}>Delete Post</button>
  </div>
);
};
export default PostDetails;