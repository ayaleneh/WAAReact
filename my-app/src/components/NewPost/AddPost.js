import React,{useState} from 'react';
import axios from 'axios';
const AddPost=({onAdd})=>{
const [title, setTitle]=useState('');
const [author, setAuthor]=useState('');
const [content, setContent]=useState('');
const handleSubmit= async(e)=>{
  e.preventDefault();
  const newPost={
    title,author,content,
  };
  const response= await axios.post('/api/posts', newPost);
  onAdd(response.data);
  setTitle('');
  setAuthor('');
  setContent('');
};
return(
  <div>
    <form onSubmit={handleSubmit}>
    <label>
      Title:
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </label>
    <br/>
    <label>
      Author:
      <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
    </label>
    <br/>
    <label>
      Content:
      <textarea value={content} onChange={(e)=>setContent(e.target.value)}/>
    </label>
    <br/>
    <button type='submit'>Add Post</button>
    </form>
  </div>
);
};
export default AddPost;