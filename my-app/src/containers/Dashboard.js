import React,{useState} from "react";
import Posts from './Posts/Posts';

const Dashboard=()=>{
  const [posts,setPosts]=useState([
    {id:1,title:'Post 1',content:'This is first post'},
    {id:2,title:'Post 2',content:'This is second post'},
    {id:3,title:'Post 3',content:'This is third post'}
  ]);
  const updateTitle=(newTitle)=>{
    const updatePosts=[...posts];
    updatePosts[0].title=newTitle;
    setPosts(updatePosts);
  };
  return(
    <div>
      <input
      type="text" placeholder="update first post's title" onChange={(e)=>updateTitle(e.target.value
        )}
      />
      <Posts posts={posts} />
    </div>
  );
};
export default Dashboard;