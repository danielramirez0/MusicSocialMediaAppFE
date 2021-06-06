import axios from "axios";
import NavBar from "../NavBar/NavBar";
import React, { useState } from "react";
import { useAppContext } from "../../libs/contextLib";
import "./UploadImage.css";
import { useHistory } from "react-router-dom";

const UploadImage = () => {
	const [fileName, setFileName] = useState("");
	const { isAuthenticated } = useAppContext();
	const history = useHistory();

	const onChangeFile = (e) => {
		console.log(e.target);
		setFileName(e.target.files[0]);
	};

	const fileUpload = (e) => {
		e.preventDefault();

		var formData = new FormData();
		formData.append("photo", fileName, fileName.name);

		console.log(formData);
		console.log(fileName);

		axios
			.post(
				"http://localhost:5000/api/users/60b9571bfc2f1a02a530af18/uploadPhoto",
				formData
			)
			.then((response) => {
				console.log(response);
				alert("You uploaded your profile photo!");
				history.push("/myProfilePage");
			})
			.catch((error) => {
				console.log(error);
				console.log(error.response.data);
			});
	};

	return (
		<div className="container">
			<div className="pb-5">
				<NavBar isAuthenticated={isAuthenticated} tabActive="n/a" />
			</div>
			<div className="center">
				<form
					className="center full-box"
					id="register-container"
					encType="multipart/form-data">
					<div>
						<label>Upload an image for your profile picture</label>
						<input
							type="file"
							name="photoImage"
							className="form-control-file"
							onChange={onChangeFile}
						/>
						<button onClick={(event) => fileUpload(event)}>Upload</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UploadImage;
