import React, { useEffect, useState } from "react";
import "./PostFeed.css";
import { useAppContext } from "../../libs/contextLib";
import axios from "axios";

const PostFeed = () => {
  const { loggedInUser } = useAppContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${loggedInUser._id}`)
      .then((response) => setPosts(response.data));
  }, [loggedInUser]);

  return posts.length === 0 ? (
    <div>
      <h3>There are no post in this feed</h3>
    </div>
  ) : (
    <div className="row">
      {posts.map((post) => (
        <div key={post._id} className="post-container">
          <div className="post-user-pic">
            <img
              src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt=""
            />
          </div>
          <div className="post-body">{post.text}</div>
          <div>
            <button>Likes: {post.likes}</button>
            <button>Dislikes: {post.dislikes}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
