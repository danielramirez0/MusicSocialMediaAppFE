import React from "react";
import "./AddPost.css";
import useForm from "../useForm/useForm";
import { useAppContext } from "../../libs/contextLib";
import axios from "axios";

const AddPost = () => {
  const { values, handleChange, handleSubmit, clearValues } = useForm(submitPost);
  const { loggedInUser, setLoggedInUser, headers } = useAppContext();

  async function submitPost() {
    let today = new Date();
    let mM = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
    let dd = today.getDay() < 10 ? `0${today.getDay()}` : `${today.getDay()}`;
    let yyyy = today.getFullYear();
    let hh = today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`;
    let mm = today.getMinutes() < 10 ? `0${today.getMinutes()}` : `${today.getMinutes()}`;
    let ss = today.getSeconds() < 10 ? `0${today.getSeconds()}` : `${today.getSeconds()}`;

    today = `${mM}-${dd}-${yyyy} @ ${hh}:${mm}:${ss}`;

    const newPost = { ...values, time: today.toString() };

    if (newPost.mood == null) {
      alert("Please choose a mood that best describes what you're currently feeling!");
      return;
    }

    console.log(newPost);
    await axios
      .post(`http://localhost:5000/api/posts/${loggedInUser._id}/post`, newPost, headers)
      .then((response) => setLoggedInUser({ ...loggedInUser, posts: response.data }))
      .catch((error) => {
        console.log(error);
      });
    clearValues();
  }

  return (
    <div className="row text-center">
      <div className="col">
        <h6 className="subtitle">What's on your mind?</h6>
      </div>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="mood">
              Musical Mood
            </label>
            <select onChange={handleChange} className="form-select" id="mood" name="mood">
              <option defaultValue value="meh...">
                What you were feeling at this moment...
              </option>
              <option value="Inspired">Inspired</option>
              <option value="Rejuvenated">Rejuvenated</option>
              <option value="Enlightened">Enlightened</option>
              <option value="Melancholy">Melancholy</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <textarea
              name="text"
              type="text"
              cols="60"
              rows="5"
              className="form-control"
              placeholder="Type away!"
              aria-label="Post time"
              aria-describedby="post-button"
              onChange={handleChange}
              value={values.text || ""}
            />
            <button className="btn btn-outline-dark" type="submit" id="post-button">
              Post!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
