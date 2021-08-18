import React, {useState} from "react";

export default function FooterComponent(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    function triggerChatPopup(value) {
        setButtonPopup(value);
        props.setChatPopup(value);
    }

    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-inner-left">
                    <button onClick={() => triggerChatPopup(!buttonPopup)} className="btn btn-secondary">Chat</button>
                </div>
            </div>

        </div>
    )
}
