import React, { Component, Fragment } from "react";
import App from "./App"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App}></Route>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default Routes;