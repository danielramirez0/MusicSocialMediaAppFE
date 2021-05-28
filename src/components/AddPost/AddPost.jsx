import React from "react";
import "./AddPost.css";

const AddPost = () => {
  return (
    <div>
      <div className="post-form">
        <form action="sumbit">
          <label htmlFor="">Add Post: </label>
          <textarea name="addPost" cols="60" rows="5" placeholder="Add new post"></textarea>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
