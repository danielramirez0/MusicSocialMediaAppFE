import React from "react";
import "./AddPost.css";
import {useState} from 'react';

const AddPost = (props) => {

  const [text, setText] = useState('')

  const handleChange = (event)=>{
    setText(event.target.value);
  }

  const handleClick = ()=>{
    const newPost={
      text:text
    }
    props.addAPost(newPost);
  }
  return (
    <div>
      <div className="post-form">
        <form action="sumbit">
          <label htmlFor="">Add Post: </label>
          <textarea name="addPost" cols="60" rows="5" placeholder="Add new post" value={text} onChange={handleChange}></textarea>
          <button onClick={handleClick}>Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
