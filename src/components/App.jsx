import "./App.css";
import {Switch , Route} from 'react-router-dom';

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
      <header className="App-header"></header>
      <h1 className="H1">Hello</h1>
    </div>
  );
}

export default App;
