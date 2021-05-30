import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FriendsList.css";

const FriendsList = (props) => {
  const [friendList , setFriendsList] = useState([]);
  const [loading, setLoading] =useState(true)
  
  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios(
          "http://localhost:5000/api/users/",
      );
      setFriendsList(result.data);
      setLoading(false)
  }
  console.log('fetch');
  fetchData();
  }, [])
  console.log(friendList[0])



  if(loading === true){
    return(
      <div>
        <h3>Loading</h3>
      </div>
    )
  }else
  return (
    <div>
      <div className="container-friends-list">
        <div className="friends-list-title">
          <h4>Friends List</h4>
        </div>
        <div>
          {friendList[0].friends.map((friend)=>{
            return(
              <div>
                <ul>
                  <li>
                    {friend.name}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
