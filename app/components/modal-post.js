import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    closeModalPost,
    registerMessageSubscription,
    sendPostComment,
    subscribeToPostComments
} from "../../src/actions/posts";
import {createTimestamp} from "../../utils/time";
import PostCommentsList from "./postCommentsList";

export default function ModalPost() {
    const [value, setValue] = useState('');
    const modalPost = useSelector(({posts}) => posts.modalPost);
    const comments = useSelector(({posts}) => posts.comments[modalPost.id])
    const commentsSub = useSelector(({posts}) => posts.commentsSubs[modalPost.id])
    const dispatch = useDispatch();

    console.info(comments);

    useEffect(() => {
        if (!commentsSub)  {
            const unsubFromMessages = dispatch(subscribeToPostComments(modalPost.id));
            dispatch(registerMessageSubscription(modalPost.id, unsubFromMessages));
        }
    }, [modalPost.id]);

    const closeModal = useCallback((event) => {
        if (event.target.classList.contains('modal-mask')) {
            dispatch(closeModalPost({}));
        }
    });

    const postComment = useCallback((event) => {
        event.preventDefault();
        setValue('');

        const comment = {
            content: value.trim(),
            timestamp: createTimestamp()
        }
        dispatch(sendPostComment(comment, modalPost.id));
    });

    function setInputState(comment) {
        setValue(comment);
    }

    return (
        <div onClick={(event) => closeModal(event)}>
            <div className="modal modal-open">
                <div className="cc-modal scrollable-content">

                    {/* ########## POST INFO ######### */}
                    <div className="row">
                        <div className="col-3 pad-3">
                            <div className="avatar av-post">

                            </div>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>

                    {/* ########## POST IMAGE ######### */}
                    <div className="row">
                        <div className="pad-3">

                            <div className="blog-layout">

                            </div>

                        </div>
                    </div>

                    {/* ########## INPUT AREA ######### */}
                    <div className="row">
                        <div className="pad-3">
                            <div className="post-input form-group">
                                <input onChange={e => setInputState(e.target.value)}
                                       className="form-control"
                                       value={value}
                                       placeholder="Write something..."/>
                                <button className="btn btn-p mrt-2" onClick={postComment}>Comment</button>
                            </div>
                        </div>
                    </div>

                    {/* ########## POST COMMENTS ######### */}
                    <div className="row pad-3">
                        <PostCommentsList comments={comments} postId={modalPost.id}/>
                    </div>

                </div>

                <div className="modal-mask">

                </div>
            </div>
        </div>
    )
}
