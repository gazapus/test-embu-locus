import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Instruccionts  from './pages/Instruccionts';
import Form  from './pages/Form';
import NotFound from './pages/NotFound';
import pathNames from './utils/pathnames';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={pathNames.form} component={Form} />
            <Route exact path={pathNames.instrucctions} component={Instruccionts} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routes;