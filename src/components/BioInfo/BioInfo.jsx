import "./BioInfo.css";
import { useAppContext } from "../../libs/contextLib";

const BioInfo = () => {
  const { user, isAuthenticated } = useAppContext();

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
                Name: {user.firstName} {user.lastName}
              </p>
            </div>
            <div>
              <p>Favorite Artist: {user.favoriteArtist}</p>
            </div>
            <div>
              <p>Favorite Song: {user.favoriteSong}</p>
            </div>
            <div>
              <p>Favorite Album: {user.favoriteAlbum}</p>
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
