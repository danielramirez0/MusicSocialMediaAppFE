import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {
    const [allUserData, setAllUserData] = useState
    ('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //GET request using axios
        const fetchData = async () => {
            const result = await axios(
                "http://localhost:5000/api/users/",
            );
            setAllUserData(result.data);
            setLoading(false);
        }
        console.log('fetch');
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div> {console.log(loading)} 
                    <h1>Loading...</h1>
                </div>
            ): (
            <div>
                <h5>
                    User 1 Data: 
                </h5>
                <div>
                    <p>{'Name: ' + allUserData[0].firstName + ' ' + allUserData[0].lastName}</p>
                    <p>{'Favorite Artist: ' + allUserData[0].favoriteArtist}</p>
                    <p>{'Favorite Album: ' + allUserData[0].favoriteAlbum}</p>
                    <p>{'Favorite Song: ' + allUserData[0].favoriteSong}</p>
                    {console.log(allUserData)}
                </div>
            </div>
            )}
        </div>

    )
}

export default UserData;