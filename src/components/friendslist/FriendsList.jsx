import React from "react";
import "./FriendsList.css";

const FriendsList = (props) => {
  return (
    <div>
      <div className="container-friends-list">
        <div className="friends-list-title">
          <h4>Friends List</h4>
        </div>
        <div>
          <ul>
            <li>
              <div className="friend">
                <img
                  src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=196&h=98&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt=""
                />
                <p>friend one</p>
                <button>delete</button>
              </div>
            </li>
            <li>
              <div className="friend">
                <img
                  src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=196&h=98&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt=""
                />
                <p>friend two</p>
                <button>delete</button>
              </div>
            </li>
            <li>
              <div className="friend">
                <img
                  src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=196&h=98&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt=""
                />
                <p>friend three</p>
                <button>delete</button>
              </div>
            </li>
            <li>
              <div className="friend">
                <img
                  src="https://www.bing.com/th?id=OIP.EqEEdh6OMHDREgIw0izqzgHaEK&w=196&h=98&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt=""
                />
                <p>friend four</p>
                <button>delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
