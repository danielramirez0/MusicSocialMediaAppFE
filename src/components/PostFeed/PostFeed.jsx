import React from "react";
import "./PostFeed.css";
import { useAppContext } from "../../libs/contextLib";

const PostFeed = () => {
  const { loggedInUser } = useAppContext();
  console.log(loggedInUser.posts)
  if (loggedInUser.posts.length === 0) {
    return (
      <div>
        <h3>There are no post in this feed</h3>
      </div>
    );
  } else {
    return(
      loggedInUser.posts.map((post) => {
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
