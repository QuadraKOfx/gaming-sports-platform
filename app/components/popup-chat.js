import React from "react";

export default function PopupChat(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
            </div>
        </div>
    ) : "";
}
