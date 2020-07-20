import React, { Component, Fragment } from "react";
import {
    Login,
    Signup
} from "./containers";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withTranslation, Trans } from 'react-i18next';


const PublicRoutes = ({component : Component, path})=>{
 return <Route exact path={path} component={Component}></Route>
}

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <PublicRoutes exact path="/" component={Login}></PublicRoutes>
                        <PublicRoutes exact path="/signup" component={Signup}></PublicRoutes>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default Routes;