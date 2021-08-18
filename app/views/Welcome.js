import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from "react-router-dom";
import LoginForm from "../components/login-form";
import RegisterForm from "../components/register-form";

export default function Welcome() {
    // const user = useSelector(({auth}) => auth.user);
    // const [isLoginView, setIsLogin] = useState(true);
    //
    // const optInText = isLoginView ?
    //     ['Need an account?', 'Register'] :
    //     ['Already registered?', 'Login']
    //
    // if (user) {
    //     return <Redirect to="/home"/>
    // }

    return (
        <div className="centered-view">
            <div className="centered-container">
                <small className="form-text text-muted mt-2">Already Registered?
                    <span
                        onClick={() => {}}
                        className="btn-link ml-2">Login</span></small>
            </div>
        </div>
    )
}
