'use strict';

import React    from 'react';
import Reflux   from 'reflux';
import { Link } from 'react-router';
import Icon     from 'react-afac';

const Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-primary">
                <Link className="navbar-brand" to="/">
                    <img src="/images/avatar.png" />
                </Link>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="nav-outgoing pull-xs-right">
                    <Icon href="https://github.com/headzoo" name="github" size="2x" />
                    <Icon href="https://twitter.com/WebSeanHickey" name="twitter" size="2x" />
                </div>
            </nav>
        )
    }
});

module.exports = Nav;
