import React from "react";
import "./PostFeed.css";

const PostFeed = () => {
  return (
    <div>
      <div className="post-container">
        <div className="post-user-pic">
          <img
            src="https://th.bing.com/th/id/OIP.GNaJoPDZ6uAasoCiA2DEewHaNK?w=115&h=183&c=7&o=5&pid=1.7"
            alt=""
          />
        </div>
        <div className="post">
          <h4>Users Name</h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione "
          </p>
        </div>
        <div className="post-buttons">
          <button>Likes: </button>
          <button>Dislikes: </button>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
