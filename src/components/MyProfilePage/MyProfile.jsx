import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import FriendsList from "../FriendsList/FriendsList";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
import axios from "axios";
import "./MyProfile.css";
import { useAppContext } from "../../libs/contextLib";

const MyProfilePage = () => {
  const { loggedInUser, setLoggedInUser, isAuthenticated, jwt} = useAppContext();
  const addAPost = (newPost) => {
    axios
      .post(`http://localhost:5000/api/posts/${loggedInUser._id}/post`, newPost)
      .then((response)=> setLoggedInUser({...loggedInUser, posts: response.data}) )
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };

  return (
    isAuthenticated && (
      <div className="container">
        <div className="pb-5">
          <NavBar tabActive="1" />
        </div>
        <div className="container pt-4">
          <div className="bio-friends">
            <div>
              <BioInfo />
              <AddPost addAPost={addAPost} />
              <PostFeed />
            </div>
            <div className="friends-list">
              <FriendsList />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfilePage;
