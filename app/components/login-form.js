import React from 'react';
import {useForm} from "react-hook-form";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../../src/actions/auth';

export default function LoginForm() {
    const {register, handleSubmit} = useForm();
    const user = useSelector(({auth}) => auth.user);

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(loginUser(data));
    }

    if (user) {
        return <Redirect to="/"/>
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">

                <div className="form-container">
                    <div className="form-group">
                        <input
                            ref={register}
                            type="email"
                            className="l-input"
                            placeholder="Email"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group mrt-2">
                        <input
                            ref={register}
                            type="password"
                            name="password"
                            className="l-input"
                            placeholder="Password"
                            id="password" />
                    </div>
                    {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
                    {/*{ error && <div className="alert alert-danger small">{error.message}</div>}*/}
                    <button
                        type="submit"
                        className="btn-login login-p mrt-2">Login</button>

                    <br />

                    <div className="form-group">
                        <small>Not yet
                            <Link
                                className="btn-link"
                                to="/register-form"> Registered?</Link>
                        </small>
                    </div>
                </div>
            </form>
        </div>

    )
}
