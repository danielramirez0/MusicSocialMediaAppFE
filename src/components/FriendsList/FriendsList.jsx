import { useAppContext } from "../../libs/contextLib";
import "./FriendsList.css";

const FriendsList = (props) => {
  const { loggedInUser , setCurrentPageOwner} = useAppContext();

  return (
    <div>
      <div className="container-friends-list">
        <div className="friends-list-title">
          <h4>Friends List</h4>
        </div>
        <div>
          {loggedInUser.friends.map((friend) => {
            return (
              <div key={friend._id}>
                <ul>
                  <li>
                    <div className="friend" >
                      <div>
                        <img
                          src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=251&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                          alt="catpic"
                        />
                      </div>
                      <div>{friend.name}</div>
                      <div>
                        <button>Delete</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
