import React, { useState, useReducer } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import '../App.css';
import { LoginPage } from '../LoginPage';
import { OrderEntry } from '../OrderEntry';
import { Topbar } from "../Topbar";
import { Sidebar } from "../Sidebar";

import { CombindAppContextProvider } from '../AppContextProvider';

function App() {
    const [history] = useState(createBrowserHistory());

    return (
        <div className="app">
            <CombindAppContextProvider>
                <Router history={history}>
                <Topbar/>
                <Sidebar/>
                    <div className="main">
                        {/* <div className="bla">
                            <ul>
                                <li>
                                    <Link to="/">Order entry</Link>
                                </li>
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                            </ul>
                        </div> */}
                        <Switch>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <Route exact path="/">
                                <OrderEntry />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </CombindAppContextProvider>
        </div>
    );
}

export default App;