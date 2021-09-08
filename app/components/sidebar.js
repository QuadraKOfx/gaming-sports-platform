import React from "react";

export default function Sidebar() {

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
                    <p className="name-time">
                        <span className="name mr-2">UserName</span>
                    </p>
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
