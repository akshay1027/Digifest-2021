import './App.css';
import { LinearProgress } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const HomeScreen = lazy(() => import('./screens/home/homeScreen'));

function App () {
    return (
        <>
            <Router>
                <Switch>
                    <Suspense fallback={<LinearProgress />}>
                        <Route path="/" exact>
                            <HomeScreen />
                        </Route>
                    </Suspense>
                </Switch>
            </Router>
        </>
    );
}

export default App;
