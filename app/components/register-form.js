import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from '../../src/actions/auth';
import {Redirect} from "react-router-dom";

export default function RegisterForm() {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);

    const onSubmit = data => {
        dispatch(registerUser(data)).then(value => {
            console.info(value);
        });
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
                            id="email"
                            name="email"
                            placeholder="Email"
                            aria-describedby="emailHelp"/>
                    </div>

                    <div className="form-group mrt-2">
                        <input
                            ref={register}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="l-input"
                            id="password"/>
                    </div>

                    <div className="form-group mrt-2">
                        <input
                            ref={register}
                            type="username"
                            name="username"
                            placeholder="Username"
                            className="l-input"
                            id="username"/>
                    </div>

                    <button
                        type="submit"
                        className="btn-login login-p mrt-2">Register
                    </button>
                </div>
            </form>

        </div>

    )
}
