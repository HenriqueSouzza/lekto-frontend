import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import HomeRouter from './home/router';
import PageNotFound from './pageNotFound';

export default function Router(props) {
    return (
        <Switch>
            <Route exact path='/' component={HomeRouter} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
