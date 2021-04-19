import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import PageNotFound from '../pageNotFound';
import ViewHome from './index';

export default function HomeRouter() {
    return (
        <Switch>
            <Route exact path='/' component={props => <ViewHome {...props} />} />
            <Route exact path='/home' component={props => <ViewHome {...props} />} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
