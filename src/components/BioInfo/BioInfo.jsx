import "./BioInfo.css";
import { useAppContext } from "../../libs/contextLib";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BioInfo = () => {
  const { loggedInUser, isAuthenticated } = useAppContext();

  const [userBio, setUserBio] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${loggedInUser._id}`)
      .then((response) => setUserBio(response.data));
  }, [loggedInUser]);

  return (
    isAuthenticated && (
      <div>
        <div className="bio-info">
          <div className="profile-pic">
            <img
              src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="tiger pic"
            />
            <a className="nav-link text-center" href="/uploadImage">
              Edit Profile Picture!
            </a>
          </div>
          <div className="about-me">
            <div>
              <p>
                Name: {loggedInUser.firstName} {loggedInUser.lastName}
              </p>
            </div>
            <div>
              <p>Favorite Artist: {loggedInUser.favoriteArtist}</p>
            </div>
            <div>
              <p>Favorite Song: {loggedInUser.favoriteSong}</p>
            </div>
            <div>
              <p>Favorite Album: {loggedInUser.favoriteAlbum}</p>
            </div>
            <a className="nav-link" href="/editUserData">
              Edit Information!
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default BioInfo;
