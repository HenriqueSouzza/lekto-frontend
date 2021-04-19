import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import App from './App';
import PageNotFound from './pages/pageNotFound';

export default function Router() {
    return (
        <Switch>
            <Route path='/' component={App} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
