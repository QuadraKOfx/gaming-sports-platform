import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../src/actions/posts";
import PostsList from "../components/posts-list";

export default function Feed() {
    const dispatch = useDispatch();
    const publicPosts = useSelector(({posts}) => posts.available);

    const user = useSelector(({auth}) => auth.user);
    const isChecking = useSelector(({auth}) => auth.isChecking);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div className="row">
            <PostsList posts={publicPosts}/>
        </div>
    )
}
