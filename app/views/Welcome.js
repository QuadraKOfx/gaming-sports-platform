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
            return <div className="avatar-section">
                <div className="row">
                    <div className="av-section-container flex">
                        {/*<h3>Welcome back {user.username}</h3>*/}
                        <div className="avatar p-avatar"/>
                        <div className="p-info-container">
                            <div className="row">
                                <h2>{user.username}</h2>
                            </div>
                            <div className="row">
                                <button className="btn btn-p">Follow</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="s-games-container">
                        <div className="row">
                            <h3>Games Playing</h3>
                        </div>
                        <div className="row pad-1">
                            <div className="avatar g-avatar"/>
                            <div className="avatar g-avatar"/>
                            <div className="avatar g-avatar"/>
                        </div>
                    </div>
                </div>
                {/*<div className="row">*/}
                {/*    <button*/}
                {/*        onClick={() => dispatch(logout())}*/}
                {/*        className="btn-p">Log out*/}
                {/*    </button>*/}
                {/*</div>*/}
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
