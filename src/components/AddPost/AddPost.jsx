import React from "react";
import "./AddPost.css";
import useForm from "../useForm/useForm";
import { useAppContext } from "../../libs/contextLib";
import axios from "axios";

const AddPost = () => {
  const { values, handleChange, handleSubmit, clearValues } = useForm(submitPost);
  const { loggedInUser, setLoggedInUser, headers } = useAppContext();

  async function submitPost() {
    const newPost = {
      body: values.text,
    };
    await axios
      .post(`http://localhost:5000/api/posts/${loggedInUser._id}/post`, newPost, headers)
      .then((response) => setLoggedInUser({ ...loggedInUser, posts: response.data }))
      .catch((error) => {
        console.log(error);
      });
    clearValues();
  }

  return (
    <div>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Add Post: </label>
          <input
            name="text"
            cols="60"
            rows="5"
            placeholder="Add new post"
            value={values.text || ""}
            onChange={handleChange}
          ></input>
          <button type="submit">Post!</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
