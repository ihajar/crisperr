import React from 'react';

import './Post.css'; 

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/* heder : avatr + username */}

            {/* Image */}
            <img className="post__image" src="https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            {/* username + caption */}

            <h4>Username: caption</h4>
        </div>
    )
}

export default Post;
