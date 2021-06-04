import axios from "axios";
import NavBar from "../NavBar/NavBar";
import React, {useState} from "react";
import { useAppContext } from "../../libs/contextLib";

const UploadImage = () => {
    const [fileName, setFileName] = useState('');
    const { isAuthenticated } = useAppContext();

    const onChangeFile = (e) => {
        console.log(e.target);
        setFileName(e.target.files[0]);
    }

    const fileUpload = (e) => {
        e.preventDefault();

        var formData = new FormData();
        const photoName = JSON.stringify(fileName.name);
        formData.append("photo", fileName);
        console.log(photoName);
        console.log(fileName);
        console.log(fileName.name);

        axios
        .post("http://localhost:5000/api/users/60b9571bfc2f1a02a530af18/uploadPhoto", formData)
        .then((response) => {
            console.log(response);
        })
        .catch ((error) => {
            console.log(error);
            console.log(error.response.data);
        })
    }

return (
    <div>
{/*         <div>
        <NavBar isAuthenticated={isAuthenticated} tabActive="n/a" />
        </div> */}
        <form encType="multipart/form-data">
            <div className="form-group">
                <label>Choose profile picture</label>
                <input 
                    type="file" 
                    name="photoImage" 
                    className ="form-control-file" 
                    onChange={onChangeFile}
                />
                <button onClick={(event) => fileUpload(event)}>Upload</button>
            </div>
        </form>
    </div>
)
}

export default UploadImage;