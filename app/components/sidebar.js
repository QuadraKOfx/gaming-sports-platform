import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";

export default function Sidebar() {
    const user = useSelector(({auth}) => auth.user);

    const redirectToProfile = useCallback(() => {
        return <Redirect to="/login"/>;
    })

    function UserDetails() {
        if (user) {
            return <p className="name-time">
                <span className="name mr-2">{user.username}</span>
            </p>
        } else {
            return <p className="name-time">
                <span className="name mr-2">username</span>
            </p>
        }

    }

    return (
        <div className="list-container">
            {/* ########## SEARCH BOX - START ############ */}
            <div className="chat-search-box">
                <div className="input-group">
                    <input className="form-control" placeholder="Search"/>
                </div>
            </div>
            {/* ########## SEARCH BOX - END ############ */}
            <ul className="items">
                <li className="item">
                    <Link to="/login" className="remove-link">
                        <div className="item-status">
                            <div className="img">

                            </div>
                        </div>
                        <UserDetails/>
                    </Link>
                </li>
                <li
                    onClick={() => {
                    }}
                    className="item">
                    <div className="item-status">
                        <div className="img">

                        </div>
                    </div>
                    <p className="name-time">
                        <span className="name mr-2">Settings</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}
