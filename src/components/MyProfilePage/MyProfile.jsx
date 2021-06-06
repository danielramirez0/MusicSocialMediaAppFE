import NavBar from "../NavBar/NavBar";
import BioInfo from "../BioInfo/BioInfo";
import AddPost from "../AddPost/AddPost";
import PostFeed from "../PostFeed/PostFeed";
// import axios from "axios";
import "./MyProfile.css";
import { useAppContext } from "../../libs/contextLib";
import FriendsList from "../FriendsList/FriendsList";

const MyProfilePage = () => {
	const { loggedInUser, setLoggedInUser, isAuthenticated } = useAppContext();

	return (
		isAuthenticated && (
			<div className="profile-container">
				<div className="row pb-5">
					<NavBar tabActive="1" />
				</div>
				<div className="row pt-6 text-center">
					<h1 className="title">{`Welcome back, ${loggedInUser.firstName}`}</h1>
					<p className="text-center f-italic">
						{loggedInUser.quote ?? "You need a quote, bro!"}
					</p>
				</div>
				<div className="row">
					<div className="col">
						<BioInfo />
					</div>
					<div className="col-4">
						<FriendsList />
					</div>
				</div>
				<div className="row row-cols-1">
					<div className="col-12">
						<AddPost />
					</div>
				</div>
				<div className="col">
					<PostFeed />
				</div>
			</div>
		)
	);
};

export default MyProfilePage;
