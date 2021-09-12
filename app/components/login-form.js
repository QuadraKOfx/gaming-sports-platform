import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export default function LoginForm() {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data))
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
