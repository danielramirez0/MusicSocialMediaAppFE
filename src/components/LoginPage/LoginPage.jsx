import axios from "axios";
import jwtDecode from "jwt-decode";
import NavBar from "../NavBar/NavBar";
import useForm from "../useForm/useForm";

const LoginPage = (props) => {
  const { values, handleChange, handleSubmit } = useForm(login);

  async function login() {
    await axios
      .post("http://localhost:5000/api/auth", values)
      .then((response) => {
        localStorage.setItem("token", response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });

    const token = localStorage.getItem("token");
    try {
      const user = jwtDecode(token);
      // alert("Welcome back!" + user.Name);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <div className="pb-5">
        <NavBar userLoggedIn={false} tabActive="n/a" />
      </div>
      <div className="pt-4">
        <h1 className="">User Login</h1>
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
              value={values.email}
              onChange={handleChange}
              // required={true}
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
              value={values.password}
              onChange={handleChange}
              // required={true}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
