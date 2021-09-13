import {Link} from "react-router-dom";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../src/actions/auth";

// TODO CHANGE TO PROFILE VIEW
export default function Welcome() {
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const isChecking = useSelector(({auth}) => auth.isChecking);

    function SetLoginView() {
        return <div className="centered-view">

            <div className="row">
                <small className="form-text text-muted mt-2">Already Registered?</small>
            </div>

            <div className="row mrt-2">
                <Link
                    to="/login-form"
                    className="btn-p">Login</Link>
            </div>
            <div className="row mrt-2">
                <button
                    className="btn-p">Register
                </button>
            </div>

        </div>
    }

    function SetUserProfile() {
        if (user) {
            return <div className="centered-view">
                <div className="row">
                    <h3>Welcome back {user.username}</h3>
                </div>
                <div className="row">
                    <button
                        onClick={() => dispatch(logout())}
                        className="btn-p">Log out</button>
                </div>
            </div>
        }
    }

    function Greetings() {
        if (user) {
            return <SetUserProfile/>;
        } else {
            return <SetLoginView/>;
        }
    }

    return (
        <div>
            <Greetings/>
        </div>
    )
}
