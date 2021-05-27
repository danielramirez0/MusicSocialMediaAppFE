import React from 'react';
import NavBar from '../navbar/NavBar';
import BioInfo from '../BioInfo/BioInfo';
import FriendsList from '../friendslist/FriendsList'
import './myProfile.css'
const MyProfilePage = () =>{
    return(
        <div>
            <NavBar />
            <div className="bio-friends">
                <div>
                    <BioInfo/>
                </div>
                <div className='friends-list'>
                    <FriendsList/>
                </div>
            </div>
        </div>
    )
}

export default MyProfilePage;