'use strict';

const roastr    = require('roastr');
const container = roastr.container;

container.factory('express.serialize', ['express.middleware'], function() {
    return function(req, res, next) {
        res.serialize = function(obj) {
            return res.json(obj.serialize());
        };
        
        next();
    };
});

module.exports = container;