'use strict';

const React          = require('react');
const ReactDOM       = require('react-dom');
const Router         = require('react-router').Router;
const Route          = require('react-router').Route;
const IndexRoute     = require('react-router').IndexRoute;
const browserHistory = require('react-router').browserHistory;

ReactDOM.render((
    <Router history={browserHistory}>
        <Route name="Index" path="/" component={require('./components/layout')}>
            <IndexRoute name="Home" component={require('./components/pages/home')} />
            <Route name="post" path="/posts/*" component={require('./components/pages/post')} />
        </Route>
    </Router>
), document.getElementById('mount'));
