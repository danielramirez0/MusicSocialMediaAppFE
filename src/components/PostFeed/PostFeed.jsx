import React, { useEffect, useState } from "react";
import "./PostFeed.css";
import { useAppContext } from "../../libs/contextLib";
import axios from "axios";

const PostFeed = () => {
  const { loggedInUser } = useAppContext();
  const [currentPageOwner, setCurrentPageOwner]= useState('');
  const [posts, setPosts]= useState([]);

  useEffect(()=>{
    setCurrentPageOwner('60afef7cc9a83f3c242b9593')
  },[])


  useEffect(()=>{
    axios.get(`http://localhost:5000/api/posts/${currentPageOwner}`)
    .then((response)=>setPosts(response.data))
  },[currentPageOwner])

  console.log(posts)
  if (posts.length === 0) {
    return (
      <div>
        <h3>There are no post in this feed</h3>
      </div>
    );
  } else {
    return(
      posts.map((post) => {
        return (
          <div className="post-container">
            <div className="post-user-pic">
              <img
                src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt=""
              />
            </div>
            <div className="post-body">{post.body}</div>
            <div>
              <button>Likes: {post.likes}</button>
              <button>Dislikes: {post.dislikes}</button>
            </div>
          </div>
        );
      })
      )
    }
};

export default PostFeed;
