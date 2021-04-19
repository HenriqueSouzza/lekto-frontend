import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import ViewAuth from './index';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/auth' component={ViewAuth} />
        </Switch>
    )
}
