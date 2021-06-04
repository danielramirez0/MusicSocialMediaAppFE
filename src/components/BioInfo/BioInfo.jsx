import "./BioInfo.css";
import { useAppContext } from "../../libs/contextLib";
import React, { useEffect } from "react";
import axios from "axios";

const BioInfo = () => {
  const { loggedInUser, isAuthenticated } = useAppContext();

  return (
    isAuthenticated && (
      <div className="row">
        <div className="col profile-pic">
          <a className="col" href="/uploadImage">
            <div className="col text-center">
              <img
                className="profile-pic"
                src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tiger pic"
              />
              <div className="profile-pic overlay">
                <div className="profile-pic overlay-text">Edit Photo</div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 rounded border border-dark text-center">
          <div className="row row-cols-1">
            <span className="bg-dark bg-gradient text-light">Name:</span>
            <p className="">
              {loggedInUser.firstName} {loggedInUser.lastName}
            </p>
          </div>
          <div className="row row-cols-1">
            <span className="bg-dark bg-gradient text-light">Favorite Artist:</span>
            <p> {loggedInUser.favoriteArtist}</p>
          </div>
          <div className="row row-cols-1">
            <span className="bg-dark bg-gradient text-light">Favorite Album:</span>
            <p>{loggedInUser.favoriteAlbum}</p>
          </div>
          <div className="row row-cols-1">
            <span className="bg-dark bg-gradient text-light">Favorite Song:</span>
            <p>{loggedInUser.favoriteSong}</p>
          </div>
          <a className="nav-link" href="/editUserData">
            Edit Information!
          </a>
        </div>
      </div>
    )
  );
};

export default BioInfo;
