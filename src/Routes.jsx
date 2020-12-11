import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Instruccionts  from './pages/Instruccionts';
import Form  from './pages/Form';
import UserForm  from './pages/UserForm';
import Ending  from './pages/Ending';
import Login  from './pages/Login';
import Dashboard  from './pages/Dashboard';
import FormEmbu from './pages/FormEmbu';
import FormUserEmbu from './pages/FormUserEmbu';
import EndingEmbu from './pages/EndingEmbu';
import NotFound from './pages/NotFound';
import pathNames from './utils/pathnames';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={pathNames.form} component={Form} />
            <Route exact path={pathNames.userform} component={UserForm} />
            <Route exact path={pathNames.instrucctions} component={Instruccionts} />
            <Route exact path={pathNames.end} component={Ending} />
            <Route exact path={pathNames.login} component={Login} />
            <Route exact path={pathNames.dashboard} component={Dashboard} />
            <Route exact path={pathNames.formembu} component={FormEmbu} />
            <Route exact path={pathNames.userformembu} component={FormUserEmbu} />
            <Route exact path={pathNames.end2} component={EndingEmbu} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Routes;