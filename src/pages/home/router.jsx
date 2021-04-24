import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import PageNotFound from '../page-not-found';
import ViewMoment from './view-moment/index';
import MomentDetail from './moment-detail/index';
import ActivityDetail from './activity-detail/index';

export default function HomeRouter() {
    return (
        <Switch>
            <Route exact path='/' component={props => <ViewMoment {...props} />} />
            <Route exact path='/home' component={props => <ViewMoment {...props} />} />
            <Route exact path='/home/:moment/activity' component={props => <MomentDetail {...props} />} />
            <Route exact path='/home/:moment/activity/:activity' component={props => <ActivityDetail {...props} />} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
