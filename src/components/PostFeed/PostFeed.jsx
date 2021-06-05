import React, { useEffect, useState } from "react";
import "./PostFeed.css";
import { useAppContext } from "../../libs/contextLib";
import axios from "axios";

const PostFeed = () => {
	const { loggedInUser, headers } = useAppContext();
	const [posts, setPosts] = useState([]);

	const buttonClick = (event, post) => {
		console.log("button", event);
		console.log("button", post);
		console.log("button", posts);

		switch (event.target.name) {
			case "like":
				const like = posts[post].likes;
				axios
					.put(
						`http://localhost:5000/api/posts/${loggedInUser._id}/${posts[post]._id}/likes`,
						like,
						headers
					)
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});
				break;
			case "dislike":
				const dislike = posts[post].dislikes;
				axios
					.put(
						`http://localhost:5000/api/posts/${loggedInUser._id}/${posts[post]._id}/dislikes`,
						dislike,
						headers
					)
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});
				break;
			case "delete":
				axios
					.put(
						`http://localhost:5000/api/posts/${loggedInUser._id}/${posts[post]._id}`,
						posts,
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
		axios
			.get(`http://localhost:5000/api/posts/${loggedInUser._id}`)
			.then((response) => setPosts(response.data));
	}, [loggedInUser]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/posts/${loggedInUser._id}`)
			.then((response) => setPosts(response.data));
	}, [posts]);

	return posts.length === 0 ? (
		<div>
			<h3>There are no post in this feed</h3>
		</div>
	) : (
		<div className="row">
			<div className="row row-cols-1">
				<div className="col text-center">
					<h3 className="title-centered">Post Feed</h3>
				</div>
			</div>
			<div className="col">
				{posts.map((post, index) => (
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
										onClick={(event) => buttonClick(event, index)}>
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
										onClick={(event) => buttonClick(event, index)}>
										Dislike:
									</button>
								</div>
								<div className="col-4 text-center">
									<p>{post.dislikes}</p>
								</div>
							</div>
							<div className="row">
								<button
									name="delete"
									onClick={(event) => buttonClick(event, index)}
									className="btn btn-outline-dark">
									Delete Post!
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostFeed;
