import { useState, useEffect } from "react";
import { useAppContext } from "../../libs/contextLib";
import "./FriendsList.css";
import axios from "axios";

const FriendsList = () => {
  const { loggedInUser, headers } = useAppContext();
  const [friends, setFriends] = useState([]);
  const [pendingFriends, setPendingFriends] = useState([]);
  const [requests, setRequests] = useState([]);

  console.log(friends);
  console.log(pendingFriends);
  console.log(requests);
  console.log(loggedInUser);

  const buttonClick = (event, choice) => {
    switch (event.target.name) {
      case "approve":
        console.log("approved!");
        console.log(requests[choice]);
        console.log(requests[choice].approve);
        console.log(requests[choice]._id);
        console.log(requests[choice].user_id);
        console.log(loggedInUser._id);
        axios
          .post(
            `http://localhost:5000/api/users/${loggedInUser._id}/${requests[choice].user_id}/addFriend`,
            requests[choice],
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        axios
          .post(
            `http://localhost:5000/api/users/${requests[choice].user_id}/${loggedInUser._id}/addFriend`,
            loggedInUser,
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        axios
          .put(
            `http://localhost:5000/api/users/${loggedInUser._id}/${requests[choice]._id}/deleteRequest`,
            loggedInUser,
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        axios
          .put(
            `http://localhost:5000/api/users/${requests[choice].user_id}/${loggedInUser._id}/deletePending`,
            loggedInUser,
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        break;
      case "deny":
        console.log("Denied");
        console.log(requests);
        axios
          .put(
            `http://localhost:5000/api/users/${loggedInUser._id}/${requests[choice]._id}/deleteRequest`,
            loggedInUser,
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        break;
      case "deleteFriend":
        console.log("Deleting friend");
        console.log(friends);
        console.log(loggedInUser);
        axios
          .put(
            `http://localhost:5000/api/users/${loggedInUser._id}/${friends[choice]._id}/deleteFriend`,
            loggedInUser,
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        break;
      case "pendingDelete":
        console.log(loggedInUser);
        console.log(pendingFriends);
        console.log(requests);
        axios
          .put(
            `http://localhost:5000/api/users/${loggedInUser._id}/${pendingFriends[choice]._id}/deleteFriend`,
            loggedInUser,
            headers
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data);
          });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${loggedInUser._id}`).then((response) => {
      const friendData = response.data.friends;
      setPendingFriends(friendData.filter((friend) => friend.pending));
      setFriends(friendData.filter((friend) => !friend.pending));
    });
  }, [loggedInUser]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${loggedInUser._id}`).then((response) => {
      const friendRequests =
        response.data.friendRequests.length > 0 ? response.data.friendRequests : [];
      setRequests(friendRequests);
    });
  }, [loggedInUser]);

  return (
    <div className="row rounded border border-primary container-friends-list">
      <div className="row">
        <div className="col text-center">
          <h4 className="f-italic">Friends</h4>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <ul className="list-group scroll-y list-group-flush">
            {friends.length > 0 ? (
              friends.map((friend, index) => (
                <li key={index} className="list-group-item list-group-item-dark">
                  <div className="row row-cols-2">
                    <div className="col-2">
                      <img src={`${friend.photoImage}`} alt="face" />
                    </div>
                    <div className="col-10">
                      <p className="">{friend.name}</p>
                    </div>
                    <button
                      onClick={(event) => buttonClick(event, index)}
                      name="deleteFriend"
                      className="btn btn-dark"
                    >
                      Delete Friend!
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>You have no friends. Send some requests!</p>
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4 className="f-italic">Pending Friends</h4>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <ul className="list-group list-group-flush scroll-y">
            {pendingFriends.length > 0 ? (
              pendingFriends.map((pending, index) => (
                <li key={index} className="list-group-item">
                  <div className="row row-cols-2">
                    <div className="col-8 text-center">
                      <p>{pending.name}</p>
                    </div>
                    <div className="col-4">
                      <button
                        onClick={(event) => buttonClick(event, index)}
                        name="pendingDelete"
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className="">Find more friends!</p>
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4 className="f-italic">Approve a friend request!</h4>
        </div>
      </div>
      <div className="row text-center">
        <ul className="list-group list-group-flush scroll-y">
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <li key={index} className="list-group-item">
                <div className="row row-cols-2">
                  <div className="col-8 text-center">
                    <p>{request.name}</p>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={(event) => buttonClick(event, index)}
                      name="approve"
                      className="btn btn-success"
                    >
                      APPROVE
                    </button>
                    <button
                      onClick={(event) => buttonClick(event, index)}
                      name="deny"
                      className="btn btn-danger"
                    >
                      DENY
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="">
              You don't have any requests from others to approve. Don't worry, they'll come.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
