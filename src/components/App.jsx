import "./App.css";
import {Switch , Route} from 'react-router-dom';
import MyProfilePage from './myProfilePage/MyProfile';

function App() {
  return (
    <div className="App">
      {/* <div>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/myProfilePage' component={MyProfilePage}/>
          <Route path='/otherUserProfilePage' component={OtherUserProfilePage}/>
          <Route path='/searchUserPage' component={SearchUserPage}/>
        </Switch>
      </div> */}
      {/* <header className="App-header"></header> */}
      <MyProfilePage />
    </div>
  );
}

export default App;
