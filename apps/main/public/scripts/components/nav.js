'use strict';

import React    from 'react';
import Reflux   from 'reflux';
import { Link } from 'react-router';
import Icon     from 'react-afac';

const Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-primary">
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
                <ul className="nav navbar-nav nav-outgoing pull-xs-right">
                    <li className="nav-item">
                        <a href="https://github.com/headzoo" className="nav-link">
                            <Icon name="github" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://twitter.com/WebSeanHickey" className="nav-link">
                            <Icon name="twitter" />
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
});

module.exports = Nav;
