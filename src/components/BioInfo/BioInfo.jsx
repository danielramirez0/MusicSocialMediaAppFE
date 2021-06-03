import "./BioInfo.css";
import { useAppContext } from "../../libs/contextLib";

const BioInfo = () => {
  const { loggedInUser, isAuthenticated } = useAppContext();

  return (
    isAuthenticated && (
      <div>
        <div className="bio-info">
          <div className="profile-pic">
            <img
              src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="tiger pic"
            />
          </div>
          <div className="about-me">
            <div>
              <p>
                Name: {loggedInUser.firstName} {loggedInUser.lastName}
              </p>
            </div>
            <div>
              <p>Favorite Artist: {loggedInUser.favoriteArtist}</p>
            </div>
            <div>
              <p>Favorite Song: {loggedInUser.favoriteSong}</p>
            </div>
            <div>
              <p>Favorite Album: {loggedInUser.favoriteAlbum}</p>
            </div>
            <a className="nav-link" href="/editUserData">
              Edit Information!
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default BioInfo;
