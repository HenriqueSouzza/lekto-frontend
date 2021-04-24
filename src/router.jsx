import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import App from './App';
import { OAuth0 } from './pages/auth/index';
import PageNotFound from './pages/page-not-found';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/auth' component={OAuth0} />
            <Route path='/' component={App} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
