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
import { AppContext } from "../libs/contextLib";
import EditUserData from "./EditUserData/EditUserData";

import UploadImage from "./UploadImage/UploadImage";
import axios from "axios";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  const [jwt, setJwt] = useState(() => localStorage.getItem("token"));
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [headers, setHeaders] = useState();

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (jwt !== null) {
      try {
        setLoggedInUser(jwtDecode(jwt));
      } catch (error) {
        console.log(error);
      }
    }
    setHeaders({
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${jwt}`,
      },
    });
  }, [jwt]);

  async function onLoad() {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setAllUsers(response.data);
    });

    if (jwt !== null) {
      try {
        await setLoggedInUser(jwtDecode(jwt));
        userHasAuthenticated(true);
      } catch (error) {
        if (error !== "InvalidTokenError: Invalid token specified") {
          console.log("No user logged in");
        }
      }
    }
    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className="container h-100 w-100">
        <AppContext.Provider
          value={{
            isAuthenticated,
            userHasAuthenticated,
            loggedInUser,
            setLoggedInUser,
            jwt,
            setJwt,
            allUsers,
            setAllUsers,
            headers,
            setHeaders,
          }}
        >
          <Switch>
            {/* <Route path="/login" render={(props) => <LoginPage {...props} login={true} />} /> */}
            {/* <Route path="/logout" render={(props) => <LoginPage {...props} login={false} />} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/myProfilePage" component={MyProfilePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/editUserData" component={EditUserData} />
            <Route path="/uploadImage" component={UploadImage} />
            {/* <Route path="/otherUserProfilePage" component={OtherUserProfilePage} /> */}
            {/* <Route path="/searchUserPage" component={SearchUserPage} /> */}
          </Switch>
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
