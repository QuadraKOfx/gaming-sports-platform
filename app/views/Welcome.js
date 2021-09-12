import {Link} from "react-router-dom";
import React from 'react';

export default function Welcome() {

    return (
        <div className="centered-view">
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
                    className="btn-p">Register</button>
            </div>

        </div>
    )
}
