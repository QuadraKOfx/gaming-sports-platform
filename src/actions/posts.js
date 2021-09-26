import * as api from '../api/posts';
import db from '../db/firestore';

export const openModalPost = post => (dispatch) => {
    dispatch({type: 'MODAL_SET_OPEN', data: post.post})
}

export const closeModalPost = () => (dispatch) => {
    dispatch({type: 'MODAL_SET_CLOSE'})
}

export const registerMessageSubscription = (postId, commentsSub) => ({
    type: 'POST_REGISTER_COMMENT_SUB',
    sub: commentsSub,
    postId
})

export const subscribeToPostComments = postId => dispatch => {
    return api.subscribeToPostComments(postId, async changes => {
        const comments = changes.map(change => {
            if (change.type === 'added') {
                return {id: change.doc.id, ...change.doc.data()}
            }
        })

        const removedComment = changes.map(change => {
            if (change.type === 'removed') {
                return {id: change.doc.id, ...change.doc.data()}
            }
        })

        const commentsWithAuthor = [];
        const cache = {}

        for await(let comment of comments) {
            if (comment) {
                if (cache[comment.author.id]) {
                    comment.author = cache[comment.author.id]
                } else {
                    const usersSnapshot = await comment.author.get();
                    cache[usersSnapshot.id] = usersSnapshot.data();
                    comment.author = cache[usersSnapshot.id];
                }
                commentsWithAuthor.push(comment);
            }
        }

        return dispatch({
            type: 'POST_SET_COMMENTS',
            removedComment: removedComment,
            comments: commentsWithAuthor,
            postId
        })
    })
}

export const sendPostComment = (comment, postId) => (dispatch, getState) => {
    const newComment = {...comment};
    const {user} = getState().auth;
    newComment.author = db.doc(`profiles/${user.uid}`);
    return api.postComment(newComment, postId)
        .then(() => dispatch({type: 'POST_COMMENT_SENT'}));
}

export const deletePostComment = (comment, postId) => (dispatch) => {
    return api.deleteComment(comment, postId)
        .then(() => dispatch({type: 'POST_COMMENT_REMOVED'}));
}

export const fetchPosts = () => async (dispatch) => {
    const posts = await api.fetchPosts();

    const sortedPosts = posts.reduce((totalPosts, post) => {
        totalPosts[post.public ? 'public' : 'private'].push(post);
        return totalPosts;
    }, {public: [], private: []});

    dispatch({
        type: 'POSTS_FETCH_SUCCESS',
        ...sortedPosts
    })

    return sortedPosts;
}
