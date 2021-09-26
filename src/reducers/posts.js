import { combineReducers } from 'redux';
import {createReducer} from "@reduxjs/toolkit";

function createPostsReducer() {

    const available = (state = [], action) => {
        switch(action.type) {
            case 'POSTS_FETCH_SUCCESS':
                return action.public;
            default: {
                return state;
            }
        }
    }

    const comments = createReducer({}, {
        'POST_SET_COMMENTS': (state, action) => {
            const prevComments = state[action.postId] || [];
            let filteredComments;
            let finalComments;
            if (!action.removedComment[0]) {
                filteredComments = prevComments;
            } else {
                filteredComments = prevComments.filter(comment => comment.id !== action.removedComment[0].id);
            }
            finalComments = [...filteredComments];
            state[action.postId] = [...finalComments, ...action.comments]
        }
    })

    const commentsSubs = (state = {}, action) => {
        switch(action.type) {
            case 'POST_REGISTER_COMMENT_SUB':
                return {...state, [action.postId]: action.sub}
            default:
                return state;
        }
    }

    const modalPost = (state = {}, action) => {
        switch(action.type) {
            case 'MODAL_SET_OPEN':
                return action.data;
            case 'MODAL_SET_CLOSE':
                return {};
            default: {
                return state;
            }
        }
    }

    return combineReducers({
        available,
        modalPost,
        comments,
        commentsSubs
    })
}

export default createPostsReducer();
