'use strict';

import React    from 'react';
import Reflux   from 'reflux';
import { Link } from 'react-router';
import Icon     from 'react-afac';

const Nav = React.createClass({
    getDefaultProps: function() {
        return {
            active: '/'
        }
    },
    
    render: function () {
        
        let self = this;
        let main = [
            {path: '/',         label: 'Home'},
            {path: '/projects', label: 'Projects'},
            {path: '/about',    label: 'About'},
            {path: '/contact',  label: 'Contact'}
        ];
        
        return (
            <nav className="navbar navbar-primary">
                <ul className="nav navbar-nav">
                    {main.map(function(item, i) {
                        return (
                            <li key={i} className={self.getNavClasses(item.path)} onMouseEnter={self.onMouseEnter} onMouseLeave={self.onMouseLeave}>
                                <Link className="nav-link" to={item.path}>{item.label}</Link>
                            </li>
                        );
                    })}
                </ul>
                <ul className="nav navbar-nav nav-outgoing pull-xs-left pull-lg-right">
                    <li className="nav-item">
                        <a href="https://twitter.com/WebSeanHickey" className="nav-link" title="Twitter">
                            <Icon name="twitter" size="2x" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/headzoo" className="nav-link" title="Github">
                            <Icon name="github" size="2x" />
                        </a>
                    </li>
                </ul>
            </nav>
        )
    },
    
    onMouseEnter: function() {
        $('.nav-item').each(function(i, item) {
            item = $(item);
            if (item.hasClass('active')) {
                item.removeClass('active').addClass('active-off');
            }
        });
    },
    
    onMouseLeave: function() {
        $('.nav-item').each(function(i, item) {
            item = $(item);
            if (item.hasClass('active-off')) {
                item.removeClass('active-off').addClass('active');
            }
        });
    },
    
    getNavClasses: function(pathname) {
        let classes = 'nav-item';
        if (pathname === this.props.active) {
            classes += ' active';
        }
        return classes;
    }
});

module.exports = Nav;
