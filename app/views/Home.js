import React, {useState} from "react";
import Navbar from "../components/navbar";
import FooterComponent from "../components/footer";
import PopupChat from "../components/popup-chat";

export default function Home() {
    const [popupButton, setPopupMode] = useState();

    function handleChatPopup(value) {
        setPopupMode(value);
    }

    return (
        <>
            {/* NAVBAR STARTS */}
            <Navbar/>

            {/* CHAT POPUP COMPONENT STARTS */}
            <PopupChat trigger={popupButton}>
                <div style={{ padding: '1rem'}}>
                    <h4>Chat Available Soon...</h4>
                </div>
            </PopupChat>

            {/* FOOTER STARTS */}
            <FooterComponent setChatPopup={handleChatPopup}/>
        </>
    )
}
