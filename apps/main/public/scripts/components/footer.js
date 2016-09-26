'use strict';

import React  from 'react';
import Reflux from 'reflux';

var Footer = React.createClass({
    render: function () {
        return (
            <footer className="container">
                <div>
                    All original written text, images and video found on this website are Copyright © 2013-2016 Sean Hickey
                    and are licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons
                    Attribution-NonCommercial-ShareAlike 4.0 International License</a> except where explicitly stated otherwise.
                </div>
                <div style={{paddingTop: '0.5rem'}}>
                    <img src="/images/cc.jpg" />
                </div>
            </footer>
        )
    }
});

module.exports = Footer;
