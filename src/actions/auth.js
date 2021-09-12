import * as api from '../api/auth';

export const register = formData => dispatch =>
    api.registerUser(formData)
        .then(user => {
            debugger
            dispatch({type: 'AUTH_REGISTERED_SUCCESS'});
            return user;
        })
