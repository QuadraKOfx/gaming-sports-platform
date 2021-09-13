import React, {useEffect, useState} from 'react';
import Home from "../app/views/Home";
import {Route, HashRouter as Router, Switch} from "react-router-dom";
import Navbar from "../app/components/navbar";
import FooterComponent from "../app/components/footer";
import Welcome from "../app/views/Welcome";
import Sidebar from "../app/components/sidebar";
import PopupChat from "../app/components/popup-chat";
import Feed from "../app/views/Feed";
import Register from "../app/views/Register";
import Login from "../app/views/Login";
import { Provider } from 'react-redux';
import configureStore from './store/index';
const store = configureStore();
import { listenToAuthChanges } from './actions/auth';


export default function App() {
    const [popupButton, setPopupMode] = useState();

    function handleChatPopup(value) {
        setPopupMode(value);
    }

    useEffect(() => {
        store.dispatch(listenToAuthChanges());
    }, [])

    return (
        <Provider store={store}>

            <Router>

                {/* NAVBAR STARTS */}
                <Navbar/>

                <div className="row fh">
                    {/* SIDEBAR STARTS */}
                    <div className="col-3">
                        <Sidebar/>
                    </div>

                    <div className='content-wrapper col-9'>

                        <Switch>
                            <Route path="/login">
                                <Welcome />
                            </Route>
                            <Route path="/login-form">
                                <Login />
                            </Route>
                            <Route path="/register-form">
                                <Register />
                            </Route>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route path="/" exact>
                                <Feed />
                            </Route>
                        </Switch>
                    </div>
                </div>

                {/* CHAT POPUP COMPONENT STARTS */}
                <PopupChat>
                    <div style={{ padding: '1rem'}}>
                        <h4>Chat Available Soon...</h4>
                    </div>
                </PopupChat>

                {/* FOOTER STARTS */}
                <FooterComponent setChatPopup={handleChatPopup}/>

            </Router>

        </Provider>
    )
}
