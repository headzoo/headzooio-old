'use strict';

import React  from 'react';
import Reflux from 'reflux';
import Nav    from './nav';
import Footer from './footer';

const Layout = React.createClass({
    render: function () {
        
        return (
            <div className="container">
                <div id="main">
                    <Nav active={this.props.location.pathname} />
                    <div id="content">
                        {this.props.children}
                    </div>
                    <div className="clearfix"></div>
                    <Footer className="inner-content" />
                </div>
            </div>
        )
    }
});

module.exports = Layout;
