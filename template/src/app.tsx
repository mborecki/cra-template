import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './routes/home';
import { getHomeRoute } from './routes/routes';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={getHomeRoute()} component={HomePage} exact />
                <Route component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}
