import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import HomeRouter from './home/router';
import PageNotFound from './page-not-found';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={props => <HomeRouter {...props} />} />
            <Route path='/home' component={props => <HomeRouter {...props} />} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
