import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const user = useSelector(({auth}) => auth.user);
    const isChecking = useSelector(({auth}) => auth.isChecking);

    function UserNav() {
        if (user) {
            return <div className="chat-navbar-inner-left col-3">
                <span className="logged-in-user mr-2">Hi {user.username}</span>
            </div>
        }
        return <div className="chat-navbar-inner-left col-3">
            <button className="btn-p">Log in</button>
        </div>
    }

    return (
        <div className="chat-navbar">
            <nav className="chat-navbar-inner">
                <UserNav/>
                <div className="chat-navbar-inner-right col-9">
                    <Link
                        to="/"
                        className="btn-p">Home</Link>
                    <Link
                        to="/login"
                        className="btn-p ml-2">Profile</Link>
                </div>
            </nav>
        </div>
    )
}
