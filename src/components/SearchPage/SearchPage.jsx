// import { useEffect, useState } from "react";
// import axios from "axios";
import NavBar from "../NavBar/NavBar";
import "./searchPage.css";
import { useAppContext } from "../../libs/contextLib";
import axios from "axios";
import { useHistory } from "react-router-dom";
const SearchPage = () => {
  const { allUsers, loggedInUser, jwt } = useAppContext();
  const history = useHistory();
  const sendFriendRequest = (user) => {
    if (loggedInUser !== undefined) {
      const friendRequest = {
        receiver: {
          _id: user.id,
          name: `${user.firstName} ${user.lastName}`,
        },
        sender: {
          _id: loggedInUser.id,
          name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        },
      };

      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": `${jwt}`,
      };

      console.log(headers);
      axios
        .post(
          `http://localhost:5000/api/users/${loggedInUser._id}/friends/${user._id}`,
          friendRequest,
          {
            headers: headers,
          }
        )
        .then((response) => console.log(response));
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="container pt-8">
      <div className="pb-5">
        <NavBar tabActive="2" />
      </div>
      <div className="row">
        {allUsers.map((user) => (
          <div key={`${user._id}`} className="card" style={{ width: "18rem" }}>
            <img src={`${user.photoImage}`} className="card-img-top" alt="profile image" />
            <div className="card-body">
              <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
              <p className="card-text">
                {user.quote ?? "Looks like this person doesn't have a favorite quote"}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="me-auto fw-bold">Favorite Artist:</div>
                {user.favoriteArtist}
              </li>
              <li className="list-group-item">
                <div className="me-auto fw-bold">Favorite Album:</div>
                {user.favoriteAlbum}
              </li>
              <li className="list-group-item">
                <div className="me-auto fw-bold">Favorite Song:</div>
                {user.favoriteSong}
              </li>
            </ul>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => sendFriendRequest(user)}
              >
                Send Friend Request!
              </button>
            </div>
          </div>
          // <div id={`${user._id}`}>
          //   <div className="card" style={{ width: 18 + "em", height: 20 + "em" }}>
          //     <img
          //       src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=251&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
          //       className="card-img-top"
          //       alt="..."
          //     ></img>
          //     <div className="card-body">
          //       <p className="card-text">
          //         {user.firstName} {user.lastName}
          //       </p>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
