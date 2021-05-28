import React from "react";
import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import FriendsList from "../FriendsList/FriendsList";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
import "./MyProfile.css";
const MyProfilePage = () => {
  return (
    <div>
      <NavBar />
      <div className="bio-friends">
        <div>
          <BioInfo />
          <AddPost />
          <PostFeed />
        </div>
        <div className="friends-list">
          <FriendsList />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;