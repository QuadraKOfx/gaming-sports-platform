import React from "react";
import {useSelector} from "react-redux";

export default function Sidebar() {
    const user = useSelector(({auth}) => auth.user);

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
                    <input className="form-control" placeholder="Search" />
                </div>
            </div>
            {/* ########## SEARCH BOX - END ############ */}
            <ul className="items">
                <li
                    onClick={() => {}}
                    className="item">
                    <div className="item-status">
                        <div className="img">

                        </div>
                    </div>
                    <UserDetails/>
                </li>
                <li
                    onClick={() => {}}
                    className="item">
                    <div className="item-status">
                        <div className="img">

                        </div>
                    </div>
                    <p className="name-time">
                        <span className="name mr-2">Leaderboards</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}
