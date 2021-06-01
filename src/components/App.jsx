import "./App.css";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Switch, Route } from "react-router-dom";
import MyProfilePage from "./MyProfilePage/MyProfile";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  const [jwt, setJwt] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState();
  try {
    const user = jwtDecode(jwt);
    setUser(user);
    console.log(user, jwt);
  } catch (error) {}

  return (
    <div>
      <Switch>
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
