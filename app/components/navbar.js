import React from "react";

export default function Navbar() {
    return (
        <div className="chat-navbar">
            <nav className="chat-navbar-inner">
                <div className="chat-navbar-inner-left">
                    <a href="/" className="btn btn-outline-success ml-2">Settings</a>
                </div>
                <div className="chat-navbar-inner-right">
                    <span className="logged-in-user mr-2">Hi User</span>
                    <button
                        onClick={() => {}}
                        className="btn btn-sm btn-outline-danger mr-2">Logout</button>
                    <button
                        onClick={() => {}}
                        className="btn btn-sm btn-outline-success mr-2">Login</button>
                </div>
            </nav>
        </div>
    )
}
