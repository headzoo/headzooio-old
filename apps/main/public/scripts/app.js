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
            <Route name="about" path="/about" component={require('./components/pages/about')} />
            <Route name="contact" path="/contact" component={require('./components/pages/contact')} />
            <Route name="projects" path="/projects" component={require('./components/pages/projects')} />
        </Route>
    </Router>
), document.getElementById('mount'));
