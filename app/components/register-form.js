import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {registerUser} from '../../src/api/auth';

export default function RegisterForm() {
    const {register, handleSubmit} = useForm();
    // const dispatch = useDispatch();

    const onSubmit = data => {
        console.info(data);
        // dispatch(registerUser(data)).then(value => {
        //     console.info(value);
        // });
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
                            aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group mrt-2">
                        <input
                            ref={register}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="l-input"
                            id="password" />
                    </div>

                    <button
                        type="submit"
                        className="btn-login login-p mrt-2">Register</button>
                </div>
            </form>

        </div>

    )
}
