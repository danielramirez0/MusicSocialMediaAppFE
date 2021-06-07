import axios from "axios";
import { useState, useEffect } from "react";
import { useAppContext } from "../../libs/contextLib";

const FriendFeed = () => {
  let [friendsPosts, setFriendsPosts] = useState([]);
  const { loggedInUser, setLoggedInUser, isAuthenticated } = useAppContext();
  const [displayPosts, setDisplayPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  const buttonClick = (event, post) => {
    console.log("button", event);
    console.log("button", post);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${loggedInUser._id}`)
      .then((response) => {
        const friendData = response.data.friends;
        setFriends(friendData.filter((friend) => !friend.pending));
        for (let index = 0; index < friends.length; index++) {
          const friendId = friends[index].user_id;
          axios
            .get(`http://localhost:5000/api/users/${friendId}`)
            .then((response) => setFriendsPosts(response.data.posts));
          console.log("friendsPosts", friendsPosts);
          Array.prototype.push.apply(displayPosts, friendsPosts);
        }
        // setDisplayPosts(friendsPosts);
      });
  }, []);

  return displayPosts.length === 0 ? (
    <div>
      <h3>There are no post in this feed</h3>
    </div>
  ) : (
    <div className="row">
      {console.log(friendsPosts)}
      {console.log(displayPosts)}
      <div className="row row-cols-1">
        <div className="col text-center">
          <h3 className="title-centered">Friend Feed</h3>
        </div>
      </div>
      <div className="col">
        {displayPosts.map((post, index) => (
          <div key={index} className="row row-cols-3 post-container">
            <div className="col-2">
              <div className="post-user-pic">
                <img
                  src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 main-post-body">
              <div className="row row-cols-4 text-center">
                <div className="col-2">
                  <h5 className="moodLabel">Felt:</h5>
                </div>
                <div className="col-4">
                  <p className="moodText">{post.mood}</p>
                </div>
                <div className="col-2">
                  <h5 className="post-time-label">On:</h5>
                </div>
                <div className="col-4">
                  <p className="post-time-text">{post.time}</p>
                </div>
              </div>
              <div className="row row-cols-1">
                <h5 className="moodLabel">Wrote:</h5>
                <div className="col">
                  <div className="post-body">{post.text}</div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row row-cols-2">
                <div className="col-8">
                  <button
                    name="like"
                    className="btn btn-outline-success"
                    onClick={(event) => buttonClick(event, index)}
                  >
                    Like:
                  </button>
                </div>
                <div className="col-4 text-center">
                  <p>{post.likes}</p>
                </div>
              </div>
              <div className="row row-cols-2">
                <div className="col-8">
                  <button
                    name="dislike"
                    className="btn btn-outline-danger"
                    onClick={(event) => buttonClick(event, index)}
                  >
                    Dislike:
                  </button>
                </div>
                <div className="col-4 text-center">
                  <p>{post.dislikes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendFeed;
