import React, {useCallback} from 'react';
import {formatTimeAgo} from "../../utils/time";
import {Delete, Trash2} from "react-feather";
import {useDispatch} from "react-redux";
import {deletePostComment} from "../../src/actions/posts";

export default function PostCommentsList({comments = [], postId}) {

    const dispatch = useDispatch();

    const deleteComment = useCallback((comment) => {
        dispatch(deletePostComment(comment, postId));
    })

    return (
        <div className="comments-container">
            <ul className="comments-box chatContainerScroll">
                { comments.map(comment =>
                    <li
                        key={comment.id}
                        className="chat-left">
                        <div className="flex pad-1">
                            <div className="col-1">
                                <div className="avatar av-comment">

                                </div>
                            </div>
                            <div className="col-5">
                                <div className="chat-name">{comment?.author.username}</div>
                            </div>
                            <div className="actions col-3">
                                <div className="icon-action"
                                     onClick={() =>
                                         deleteComment(comment)}>
                                    <Trash2/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="chat-hour">{formatTimeAgo(comment.timestamp)}</div>
                            </div>
                        </div>
                        <div className="chat-text-wrapper">
                            <span className="chat-text">{comment.content}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
