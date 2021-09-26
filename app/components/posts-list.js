import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openModalPost} from "../../src/actions/posts";

export default function PostsList({posts}) {

    const dispatch = useDispatch();

    const openModal = useCallback(post => {
        dispatch(openModalPost({post}));
    });

    return (
        <div className="blog-container">
            {posts.map(post =>

                <div  key={post.id}
                      className="blog-post-container">

                <div className="blog-post clickable"
                     onClick={() => openModal(post)}>

                        <div className="blog-layout">

                        </div>

                        <div className="blog-info">
                            <h2>{post.title}</h2>
                        </div>

                        <div className="blog-info">
                            <h3>{post.description}</h3>
                        </div>

                    </div>
                </div>


            )}

        </div>
    )
}
