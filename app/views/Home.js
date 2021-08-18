import React, {useState} from "react";
import Navbar from "../components/navbar";
import FooterComponent from "../components/footer";
import PopupChat from "../components/popup-chat";
import Sidebar from "../components/sidebar";

export default function Home() {
    const [popupButton, setPopupMode] = useState();

    function handleChatPopup(value) {
        setPopupMode(value);
    }

    return (
        <div className="row wh fh">
            {/* NAVBAR STARTS */}
            <Navbar/>

            {/* SIDEBAR STARTS */}
            <Sidebar/>

            {/* CHAT POPUP COMPONENT STARTS */}
            <PopupChat trigger={popupButton}>
                <div style={{ padding: '1rem'}}>
                    <h4>Chat Available Soon...</h4>
                </div>
            </PopupChat>

            {/* FOOTER STARTS */}
            <FooterComponent setChatPopup={handleChatPopup}/>
        </div>
    )
}
