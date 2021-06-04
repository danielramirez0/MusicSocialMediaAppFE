import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import useForm from "../useForm/useForm";
import jwtDecode from 'jwt-decode';
import "./LoginPage.css";
import { useAppContext } from "../../libs/contextLib";

const LoginPage = (props) => {
  const { values, handleChange, handleSubmit } = useForm(login);
  const { setJwt, isAuthenticated, userHasAuthenticated, jwt, setLoggedInUser } = useAppContext();
  const history = useHistory();

  async function login() {
    await axios
      .post("http://localhost:5000/api/auth", values)
      .then((response) => {
        localStorage.setItem("token", response.data);
        setJwt(localStorage.getItem("token"));
        try {
          const loginJwt = localStorage.getItem('token')
          const userInfo = jwtDecode(loginJwt)
          axios.get(`http://localhost:5000/api/users/${userInfo._id}`)
          .then((response)=>setLoggedInUser(response.data))
          
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.response.data);
      });
      userHasAuthenticated(true);
      history.push("/myProfilePage");
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
