import React from "react";
import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import FriendsList from "../FriendsList/FriendsList";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
import {useEffect, useState} from 'react';
import axios from 'axios';
import "./MyProfile.css";

const MyProfilePage = () => {
  const [userData , setUserData] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios(
          "http://localhost:5000/api/users/",
      );
      setUserData(result.data[0]);
      setLoading(false)
  }
  console.log('fetch');
  fetchData();
  }, [])

  if(loading === true){
    return(
      <div>
        Loading...
      </div>
    )
  }else
  return (
    <div className="container">
      <div className="pb-5">
        <NavBar userLoggedIn={true} tabActive="1" />
      </div>
      <div className="container pt-4">
        <div className="bio-friends">
          <div>
            <BioInfo userData={userData}/>
            <AddPost />
            <PostFeed postFeed={userData.posts} />
          </div>
          <div className="friends-list">
            <FriendsList friends={userData.friends} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
