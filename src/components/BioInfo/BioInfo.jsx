import React from "react";
import "./BioInfo.css";

const BioInfo = (props) => {
  return (
    <div>
      <div className="bio-info">
        <div className="profile-pic">
          <img
            src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="tiger pic"
          />
        </div>
        <div className="about-me">
          <div>
            <p>Name: {props.userData.firstName} {props.userData.lastName}</p>
          </div>
          <div>
            <p>Favorite Artist: {props.userData.favoriteArtist}</p>
          </div>
          <div>
            <p>Favorite Song: {props.userData.favoriteSong}</p>
          </div>
          <div>
            <p>Favorite Album: {props.userData.favoriteAlbum}</p>
          </div>
          <a class="nav-link" href="/editUserData">Edit Information!</a>
        </div>
      </div>
    </div>
  );
};

export default BioInfo;
