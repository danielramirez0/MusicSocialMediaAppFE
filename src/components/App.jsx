import "./App.css";
import { Switch, Route } from "react-router-dom";
import MyProfilePage from "./MyProfilePage/MyProfile";

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" exact component={MainPage} /> */}
        <Route path="/myProfilePage" component={MyProfilePage} />
        {/* <Route path="/otherUserProfilePage" component={OtherUserProfilePage} /> */}
        {/* <Route path="/searchUserPage" component={SearchUserPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
