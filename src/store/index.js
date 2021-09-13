import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducers/app';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';


export default function configureStore() {
    const middlewares = [
        thunkMiddleware,
    ];

    const mainReducer = combineReducers({
        app: appReducer,
        auth: authReducer,
        posts: postsReducer
    })

    const rootReducer = (state, action) => {

        return mainReducer(state, action)
    }

    return createStore(
        rootReducer,
        applyMiddleware(...middlewares));
}
