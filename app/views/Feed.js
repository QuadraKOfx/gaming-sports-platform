import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../src/actions/posts";
import PostsList from "../components/posts-list";
import ModalPost from "../components/modal-post";

export default function Feed() {
    const dispatch = useDispatch();
    const publicPosts = useSelector(({posts}) => posts.available);
    const modalPost = useSelector(({posts}) => posts.modalPost);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    function PostModal() {
        if (Object.keys(modalPost).length !== 0) {
            return <ModalPost/>
        } else {
            return null;
        }
    }

    return (
        <div>
            <div className="row">
                <PostsList posts={publicPosts}/>
            </div>

            <PostModal/>

        </div>
    )
}
