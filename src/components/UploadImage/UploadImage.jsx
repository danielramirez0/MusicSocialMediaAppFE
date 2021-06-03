import axios from "axios";
import NavBar from "../NavBar/NavBar";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

const UploadImage = () => {
    const [fileName, setFileName] = useState('');
    const history = useHistory();
    const { isAuthenticated } = useAppContext();

    const onChangeFile = (e) => {
        console.log(e.target);
        setFileName(e.target.files[0]);
    }

    const fileUpload = (e) => {
        e.preventDefault();

        var formData = new FormData();
        
        formData.append("photo", fileName);

        axios
        .post("http://localhost:5000/api/users/60b83cb9abeb84f903933cfe/uploadPhoto", formData)
        .then((response) => {
            console.log(response);
            history.push("/myProfilePage");
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
                <button onClick={fileUpload}>Upload</button>
            </div>
        </form>
    </div>
)
}

export default UploadImage;