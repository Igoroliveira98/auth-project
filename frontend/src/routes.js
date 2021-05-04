import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    );
}