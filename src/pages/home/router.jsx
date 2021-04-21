import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import PageNotFound from '../pageNotFound';
import ViewMoment from './viewMoment/index';
import MomentDetail from './momentDetail/index';

export default function HomeRouter() {
    return (
        <Switch>
            <Route exact path='/' component={props => <ViewMoment {...props} />} />
            <Route exact path='/home' component={props => <ViewMoment {...props} />} />
            <Route exact path='/home/:moment/activity' component={props => <MomentDetail {...props} />} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
