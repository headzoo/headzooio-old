'use strict';

module.exports = function(express) {
    
    express.get('*', function (req, res) {
        res.render('layout');
    });
};