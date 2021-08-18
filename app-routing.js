import React from 'react';
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";

import WelcomeView from './app/views/Welcome';

const store = configureStore();

export default function AppRouting() {
    return (
        <Provider store={store}>
            <div className={'content-wrapper'}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <WelcomeView />
                        </Route>
                    </Switch>
                </Router>
            </div>

        </Provider>
    )
}
