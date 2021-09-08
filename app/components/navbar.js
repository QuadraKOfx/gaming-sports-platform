import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {

    return (
        <div className="chat-navbar">
            <nav className="chat-navbar-inner">
                <div className="chat-navbar-inner-left col-3">
                    <span className="logged-in-user mr-2">Hi Legend..</span>
                </div>
                <div className="chat-navbar-inner-right col-9">
                    <Link
                        to="/home"
                        className="btn-p">Home</Link>
                    <Link
                        to="/login"
                        className="btn-p ml-2">Reload</Link>
                </div>
            </nav>
        </div>
    )
}
