import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Home from '../pages/Home';


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/register" component={ Register }/>
            <Route path="/login" component={ Login }/>
        </Switch>
    );
    };

export default Routes;