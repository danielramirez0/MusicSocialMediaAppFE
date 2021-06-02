import { useHistory } from "react-router-dom";
import logo from "../../img/headphones.png";
import { useAppContext } from "../../libs/contextLib";

const NavBar = (props) => {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  function logout() {
    try {
      localStorage.removeItem("token");
      // alert("Come back soon!");
      userHasAuthenticated(false);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Music with Friends
        </a>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={props.tabActive === "0" ? "nav-link active" : "nav-link"}
              aria-current={props.tabActive === "0" ? "page" : ""}
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`${props.tabActive === "1" ? "nav-link active" : "nav-link"} ${
                isAuthenticated === true ? null : "disabled"
              }`}
              aria-current={props.tabActive === "1" ? "page" : ""}
              href="/myProfilePage"
            >
              MyProfile
            </a>
          </li>

          <li className="nav-item">
            <a
              className={props.tabActive === "2" ? "nav-link active" : "nav-link"}
              aria-current={props.tabActive === "2" ? "page" : ""}
              href="/search"
            >
              Find Friends
            </a>
          </li>
          <li className="nav-item">
            <a
              className={props.tabActive === "3" ? "nav-link active" : "nav-link"}
              aria-current={props.tabActive === "3" ? "page" : ""}
              href="/about"
              tabIndex="-1"
            >
              About Site
            </a>
          </li>
        </ul>
        {isAuthenticated === false ? (
          <>
            <a className="btn btn-outline-primary" href="/register">
              Register
            </a>
            <a className="nav-link" href="/login">
              Sign In
            </a>
          </>
        ) : (
          <button className="btn btn-outline-danger" onClick={() => logout()}>
            Logoff
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
