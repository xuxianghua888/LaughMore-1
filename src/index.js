import React from 'react';
import {render} from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Wrap from "./containers/Wrap";
import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
import Login from './containers/Login/index';
import Reg from './containers/Reg/index';
import PrivateRoute from "./PrivateRoute";

import store from './redux/store';
window._store = store;

import {Provider} from 'react-redux';

import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import Detail from "./containers/Detail/index";
import Publish from "./containers/Publish/index";
import PrivateRouteDetail from "./PrivateRouteDetail";

let history = createHistory();

render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Wrap>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Route path={'/detail/:id'} component={Detail}/>
                <PrivateRouteDetail path="/publish" component={Publish}/>
            </Switch>
        </Wrap>
    </ConnectedRouter>
</Provider>, document.querySelector('#root'));

