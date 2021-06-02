import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import FriendsList from "../FriendsList/FriendsList";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
import axios from "axios";
import "./MyProfile.css";
import { useAppContext } from "../../libs/contextLib";

const MyProfilePage = (props) => {
  const { isAuthenticated } = useAppContext();
  const addAPost = (newPost) => {
    axios
      .post(`http://localhost:5000/api/${props.user._id}/post`, newPost)
      .then(console.log(newPost));
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
              <AddPost addAPost={() => addAPost} />
              {/* <PostFeed /> */}
            </div>
            <div className="friends-list">{/* <FriendsList /> */}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfilePage;
