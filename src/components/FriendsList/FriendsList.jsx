import { useState, useEffect } from "react";
import { useAppContext } from "../../libs/contextLib";
import "./FriendsList.css";
import axios from "axios";

const FriendsList = () => {
  const { loggedInUser } = useAppContext();
  const [friends, setFriends] = useState([]);
  const [pendingFriends, setPendingFriends] = useState([]);
  const [requests, setRequests] = useState([]);

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
              friends.map((friend) => (
                <li key={friend.user_id} className="list-group-item list-group-item-dark">
                  <div className="row row-cols-2">
                    <div className="col-2">
                      <img src={`${friend.photoImage}`} alt="face" />
                    </div>
                    <div className="col-10">
                      <p className="">{friend.name}</p>
                    </div>
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
              pendingFriends.map((pending) => (
                <li key={pending._id} className="list-group-item">
                  <div className="row row-cols-2">
                    <div className="col-8 text-center">
                      <p>{pending.name}</p>
                    </div>
                    <div className="col-4">
                      <button className="btn btn-danger">X</button>
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
            requests.map((request) => (
              <li key={request.user_id} className="list-group-item">
                <div className="row row-cols-2">
                  <div className="col-8 text-center">
                    <p>{request.name}</p>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-danger">X</button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="">
              You don't have any requests from others to approve. Don't worry, the'll come.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
