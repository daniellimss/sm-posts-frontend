import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Form from './components/Form';
import PostsListings from './components/PostsListings';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [newPost, setNewPost] = useState(false);


  //CRUD - Read / Get all posts:
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:8000/posts/`);
      console.log(res.data.listings)
      setPosts(res.data.listings);
    }
    fetchPosts();
  }, [posts]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
      </div>

      <div>
        <PostsListings posts={posts} title={title} content={content} />
      </div>
      <button className="newpost-btn" onClick={() => setNewPost(true)}>Create New Post</button>
      <br />
      {
        newPost ? <Form
          /* title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editContent={editContent}
          setEditContent={setEditContent} */
          postId={posts.id}
        /> : null
      }


    </div>
  );
}

export default App;
