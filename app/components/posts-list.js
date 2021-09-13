import React from "react";
import { Heart, Star } from 'react-feather';

export default function PostsList({posts}) {

    const checkPost = post => {
        const isConfirming = confirm(`Checking Post... : ${post.title} ?`);
    }

    return (
        <div className="posts-container">
            {posts.map(post =>

                <div
                    key={post.id}
                    className="posts-card mrt-3">

                    <div className="post-image">

                    </div>

                    <div className="post-body">
                        <div className="pb-info">
                            <h3>{post.title}</h3>
                        </div>
                        <div className="sub-title">
                            <h3>{post.description}</h3>
                        </div>
                    </div>

                    <div className="post-actions" onClick={() => checkPost(post)}>
                        <div className="actions">
                            <Heart />
                            {/*<button className="btn-p btn-a">Like Post</button>*/}

                            {/*<button className="btn-p btn-a ml-2">Ratings</button>*/}
                            <Star className="star" />
                        </div>
                    </div>


                </div>
            )}

        </div>
    )
}
