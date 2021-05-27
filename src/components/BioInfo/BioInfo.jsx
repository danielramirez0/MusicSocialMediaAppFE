import react from 'react';
import './bioInfo.css'

const BioInfo = ()=>{
    return(
        <div>
            <div className="bio-info">
                <div className="profile-pic"> 
                    <img src="https://www.bing.com/th?id=OIP.N8rKfbKT-MHFneNrhohDKgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="tiger pic" />
                </div>
                <div className="about-me">
                    <h4>About me</h4>
                    <p>favorite artist</p>
                    <p>favorite album</p>
                    <p>favorite song</p>
                </div>
            </div> 
        </div>
    )
}

export default BioInfo;