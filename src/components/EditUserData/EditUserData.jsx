import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import useForm from "../useForm/useForm";
import { useAppContext } from "../../libs/contextLib";
import "./EditUserData.css";

const EditUserData = () => {
  const { values, handleChange, handleSubmit } = useForm(editData);
  const [userData, setUserData] = useState([]);
  const history = useHistory();
  const { headers, loggedInUser, setLoggedInUser, isAuthenticated } = useAppContext();

  async function editData() {
    await axios
      .put("http://localhost:5000/api/users/" + userData._id, values, headers)
      .then((response) => {
        alert("User Information Updated!");
        setLoggedInUser(response.data);
        history.push("/myProfilePage");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${loggedInUser._id}`).then((response) => {
      setUserData(response.data);
    });
  }, [loggedInUser]);

  return (
    isAuthenticated && (
      <div className="container">
        <div className="pb-5">
          <NavBar tabActive="n/a" />
        </div>
        <div className="center center-vertical small-box" id="register-container">
          <h1 className="text-center">Edit User Data</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userFirstName" className="form-label">
                First Name
              </label>
              <input
                placeholder={userData.firstName}
                className="form-control"
                type="text"
                name="firstName"
                id="userFirstName"
                value={values.firstName || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="userLastName" className="form-label">
                Last Name
              </label>
              <input
                placeholder={userData.lastName}
                className="form-control"
                type="text"
                name="lastName"
                id="userLastName"
                value={values.lastName || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="userFavoriteArtist" className="form-label">
                Favorite Artist
              </label>
              <input
                placeholder={userData.favoriteArtist}
                className="form-control"
                type="text"
                name="favoriteArtist"
                id="favoriteArtist"
                value={values.favoriteArtist || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="userFavoriteAlbum" className="form-label">
                Favorite Album
              </label>
              <input
                placeholder={userData.favoriteAlbum}
                className="form-control"
                type="text"
                name="favoriteAlbum"
                id="favoriteAlbum"
                value={values.favoriteAlbum || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="userFavoriteSong" className="form-label">
                Favorite Song
              </label>
              <input
                placeholder={userData.favoriteSong}
                className="form-control"
                type="text"
                name="favoriteSong"
                id="favoriteSong"
                value={values.favoriteSong || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditUserData;
