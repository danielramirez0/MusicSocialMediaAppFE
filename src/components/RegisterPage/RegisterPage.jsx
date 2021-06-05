import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import useForm from "../useForm/useForm";
import "./RegisterPage.css";
import { useAppContext } from "../../libs/contextLib";

const RegisterPage = () => {
  const { errors, values, handleChange, handleSubmit } = useForm(register);
  const { isAuthenticated, userHasAuthenticated, setLoggedInUser } = useAppContext();
  const history = useHistory();

  async function register() {
    const { confirmPassword, ...newUser } = values;

    await axios
      .post("http://localhost:5000/api/users/", newUser)
      .then((response) => {
        localStorage.setItem("token", response.headers["x-auth-token"]);
        userHasAuthenticated(true);
        setLoggedInUser(response.data);
        history.push("/myProfilePage");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
      });
  }

  return (
    <div className="row">
      <div className="pb-5">
        <NavBar tabActive="n/a" />
      </div>
      <div className="center" id="register-container">
        <div className="center full-box">
          <h1 className="text-center">User Registration</h1>
          {!isAuthenticated ? (
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">First Name</span>
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  id="firstName"
                  aria-describedby="firstNameHelp"
                  value={values.firstName || ""}
                  onChange={handleChange}
                  required={true}
                />
                <span className="input-group-text">Last Name</span>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  id="lastName"
                  aria-describedby="lastNameHelp"
                  value={values.lastName || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Email address</span>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="userEmail"
                  aria-describedby="emailHelp"
                  value={values.email || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  required={true}
                />
                <p className="errors">{errors.password ? `${errors.password}` : null}</p>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Retype Password</span>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword || ""}
                  onChange={handleChange}
                  required={true}
                />
                <p className="errors">
                  {errors.confirmPassword ? `${errors.confirmPassword}` : null}
                </p>
              </div>
              <div className="mb-3">
                <span className="input-group-text">Favorites:</span>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Artist</span>
                <input
                  className="form-control"
                  type="text"
                  name="favoriteArtist"
                  id="favoriteArtist"
                  value={values.favoriteArtist || ""}
                  onChange={handleChange}
                  required={true}
                />
                <span className="input-group-text">Album</span>
                <input
                  className="form-control"
                  type="text"
                  name="favoriteAlbum"
                  id="favoriteAlbum"
                  value={values.favoriteAlbum || ""}
                  onChange={handleChange}
                  required={true}
                />
                <span className="input-group-text">Song</span>
                <input
                  className="form-control"
                  type="favoriteSong"
                  name="favoriteSong"
                  id="favoriteSong"
                  value={values.favoriteSong || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="text-center">
                <p>
                  * Don't worry, we will definitely use your data for things. Oh, and sell it too.
                </p>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <h5>Looks like you're already registered, bro.</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
