import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import FriendsList from "../FriendsList/FriendsList";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
import axios from "axios";
import "./MyProfile.css";
import { useAppContext } from "../../libs/contextLib";

const MyProfilePage = () => {
  const { loggedInUser, setLoggedInUser, isAuthenticated } = useAppContext();
  const addAPost = (newPost) => {
    axios
      .post(`http://localhost:5000/api/posts/${loggedInUser._id}/post`, newPost)
      .then((response) => setLoggedInUser({ ...loggedInUser, posts: response.data }))
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
        <div className="row pt-6">
          <div className="col-10">
            <BioInfo />
          </div>
          <div className="col-2">
            <FriendsList />
          </div>
        </div>
        <div className="col-4">
          <AddPost addAPost={addAPost} />
        </div>
        <div className="col-4">
          <PostFeed />
        </div>
      </div>
    )
  );
};

export default MyProfilePage;
