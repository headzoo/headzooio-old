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
                    <Nav />
                    <div id="content" className="container">
                        {this.props.children}
                    </div>
                    <div className="clearfix"></div>
                    <Footer />
                </div>
            </div>
        )
    }
});

module.exports = Layout;
