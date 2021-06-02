// import jwtDecode from "jwt-decode";
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import useForm from "../useForm/useForm";

const EditUserData = () => {
    const { values, handleChange, handleSubmit } = useForm(editData);
    const [loading, setLoading] = useState(true);
    const [userData , setUserData] = useState([]);
    const history = useHistory();

    async function editData() {
        console.log('pre', values);
       
        await axios
        .put("http://localhost:5000/api/users/"+userData._id, values)
        .then((response) => {
            alert("User Information Updated!");
            console.log(response);
            history.push("/myProfilePage");
        })
        .catch((error) => {
            console.log(error);
            alert(error.response.data);
        });
      }

    useEffect(()=>{
    const fetchData = async () => {
        const result = await axios(
            "http://localhost:5000/api/users/",
        );
        setUserData(result.data[3]);
        setLoading(false)
    }
    console.log('fetch');
    fetchData();
    }, [])

    if(loading === true){
        return(
          <div>
            Loading...
          </div>
        )
      }else
    return (
        <div className="container">
            {console.log('here', userData)}
          <div className="pb-5">
            <NavBar userLoggedIn={true} tabActive="n/a" />
          </div>
          <div className="center center-vertical small-box">
            <h1 className="text-center">EditUserData</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userFirstName" className="form-label">
                  First Name
                </label>
                <input
                  placeholder={userData.firstName}
                  className="form-control"
                  type="text"
                  name="firstName"
                  id="userFirstName"
                  value={values.firstName || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="userLastName" className="form-label">
                  Last Name
                </label>
                <input
                  placeholder={userData.lastName}
                  className="form-control"
                  type="text"
                  name="lastName"
                  id="userLastName"
                  value={values.lastName || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="userFavoriteArtist" className="form-label">
                  Favorite Artist
                </label>
                <input
                  placeholder={userData.favoriteArtist}
                  className="form-control"
                  type="text"
                  name="favoriteArtist"
                  id="favoriteArtist"
                  value={values.favoriteArtist || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="userFavoriteAlbum" className="form-label">
                  Favorite Album
                </label>
                <input
                  placeholder={userData.favoriteAlbum}
                  className="form-control"
                  type="text"
                  name="favoriteAlbum"
                  id="favoriteAlbum"
                  value={values.favoriteAlbum || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="userFavoriteSong" className="form-label">
                  Favorite Song
                </label>
                <input
                  placeholder={userData.favoriteSong}
                  className="form-control"
                  type="text"
                  name="favoriteSong"
                  id="favoriteSong"
                  value={values.favoriteSong || ''}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </form>
          </div>
        </div>
      );
    };

export default EditUserData;