import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import useForm from "../useForm/useForm";
import "./LoginPage.css";
import { useAppContext } from "../../libs/contextLib";

const LoginPage = () => {
  const { values, handleChange, handleSubmit } = useForm(login);
  const { setJwt, isAuthenticated, userHasAuthenticated } = useAppContext();
  const history = useHistory();

  async function login() {
    await axios
      .post("http://localhost:5000/api/auth", values)
      .then((response) => {
        localStorage.setItem("token", response.data);
        userHasAuthenticated(true);
        setJwt(localStorage.getItem("token"));
        history.push("/myProfilePage");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  }

  return (
    <div className="container">
      <div className="pb-5">
        <NavBar tabActive="n/a" />
      </div>
      <div className="center" id="login-container">
        <div className="center small-box">
          <h1 className="text-center">User Login</h1>
          {!isAuthenticated ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email address
                </label>
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
              <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="userPassword"
                  value={values.password || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          ) : (
            <h5>Looks like you're already logged in, bro.</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
