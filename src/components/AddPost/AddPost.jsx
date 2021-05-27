import React from 'react';

const AddPost =()=>{
    return(
        <div>
            <div className="post-form">
                <form action="sumbit" style={{marginTop: 40}}>
                    <label htmlFor="">Add Post: </label>
                    <textarea name="addPost" cols="60" rows="5" placeholder ="Add new post"></textarea>
                </form>
            </div>
        </div>
    )
}

export default AddPost;