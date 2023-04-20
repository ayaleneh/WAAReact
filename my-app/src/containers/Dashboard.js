import React,{useState, useEffect} from "react";
import Posts from './Posts/Posts';
import axios from "axios";
import AddPost from "../components/NewPost/AddPost";


// const Dashboard=()=>{
//   const [posts,setPosts]=useState([
//     {id:1,author:'Ay', title:'Post 1',content:'This is first post'},
//     {id:2,author:'Ay',title:'Post 2',content:'This is second post'},
//     {id:3,author:'Ay',title:'Post 3',content:'This is third post'}
//   ]);
//   const updateTitle=(newTitle)=>{
//     const updatePosts=[...posts];
//     updatePosts[0].title=newTitle;
//     setPosts(updatePosts);
//   };
//   return(
//     <div>
//       <Posts posts={posts} />
//       <input
//       type="text" placeholder="update first post's title" onChange={(e)=>updateTitle(e.target.value)}
//       />
//       {/* // <button onClick={(e)=>updateTitle()}>Change Name</button>  */}
//     </div>
    
//   );
// };
// export default Dashboard;

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleAdd = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <AddPost onAdd={handleAdd} />
      <Posts posts={posts} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;