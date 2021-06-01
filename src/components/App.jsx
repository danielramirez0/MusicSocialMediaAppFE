import "./App.css";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Switch, Route, useHistory } from "react-router-dom";
import MyProfilePage from "./MyProfilePage/MyProfile";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const [jwt, setJwt] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    setJwt(() => {
      try {
        const data = jwtDecode(jwt);
        setUser(data);
      } catch (error) {}
    });
  }, [user]);

  function logout() {
    try {
      localStorage.removeItem("token");
      alert("Come back soon!");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Switch>
        {/* <Route path="/login" render={(props) => <LoginPage {...props} login={true} />} /> */}
        {/* <Route path="/logout" render={(props) => <LoginPage {...props} login={false} />} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/myProfilePage" component={MyProfilePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/search" component={SearchPage} />

        {/* <Route path="/otherUserProfilePage" component={OtherUserProfilePage} /> */}
        {/* <Route path="/searchUserPage" component={SearchUserPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
