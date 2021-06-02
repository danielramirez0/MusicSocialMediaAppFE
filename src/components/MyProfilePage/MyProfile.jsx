import React from "react";
import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import FriendsList from "../FriendsList/FriendsList";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
import axios from 'axios';
import "./MyProfile.css";
import { useAppContext } from "../../libs/contextLib";

const MyProfilePage = (props) => {
  const {user} = useAppContext();

 const addAPost = (newPost)=>{
   axios.post(`http://localhost:5000/api/${props.user._id}/post`, newPost)
   .then(console.log(newPost))
 }

  if(props.loading === true){
    return(
      <div>
        Loading...
      </div>
    )
  }else
  return (
    <div className="container">
      {console.log(user)}
      <div className="pb-5">
        <NavBar userLoggedIn={true} tabActive="1" />
      </div>
      <div className="container pt-4">
        <div className="bio-friends">
          <div>
            <BioInfo userData={user}/>
            <AddPost addAPost={addAPost}/>
            <PostFeed postFeed={user.posts} />
          </div>
          <div className="friends-list">
            <FriendsList friends={user.friends} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
