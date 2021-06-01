import { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from "../NavBar/NavBar";
import './searchPage.css'
const SearchPage = (props) => {

  const [userData , setUserData] = useState([]);
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios(
          "http://localhost:5000/api/users/",
      );
      setUserData(result.data);
      setLoading(false)
  }
  console.log('fetch');
  fetchData();
  },[])
  return (
    <div className="container">
      <div className="pb-5">
        <NavBar userLoggedIn={false} tabActive="2" />
      </div>
      <div className="card-container">
        {userData.map((user)=>{
          return(
            <div>
              <div class="card" style={{width:18+"em", height:20+"em"}}>
              <img src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=251&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <p class="card-text">{user.firstName} {user.lastName}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div>
      </div>
    </div>
  );
};

export default SearchPage;
