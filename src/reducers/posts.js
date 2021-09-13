import { combineReducers } from 'redux';


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

    return combineReducers({
        available,
    })
}

export default createPostsReducer();
