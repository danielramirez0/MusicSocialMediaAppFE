import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditUserData() {
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState()

    useEffect(() => {
        //PUT user data using axios
        axios
            .put(
                "http://localhost:5000/api/users/60b11d13a58992be03756066",
            )
            .then (res => {
                console.log(res);
            })
            .catch (err => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            <form onSubmit={(event) =>
                {setUrl("http://localhost:5000/api/users/60b11d13a58992be03756066");
                event.preventDefault();
            }}>
                <input type="text" value={query} onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">
                    Edit
                </button>
            </form>
        </div>

    )
}

export default EditUserData;