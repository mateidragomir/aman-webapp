import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import '../App.css';
import { LoginPage } from '../LoginPage';
import { OrderEntry } from '../OrderEntry';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
        this.history.listen((location, action) => {

        });

    }

    render() {
        return(
            <div className="app">

                <div className="main">
                    <Router history={this.history}>
                        <Switch>
                            <Route>
                                
                                <OrderEntry exact path="/"/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;