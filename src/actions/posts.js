import * as api from '../api/posts';

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
