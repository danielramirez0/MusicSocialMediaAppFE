import "./App.css";
import { Switch, Route } from "react-router-dom";
import MyProfilePage from "./MyProfilePage/MyProfile";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import SearchPage from "./SearchPage/SearchPage";

function App() {
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
