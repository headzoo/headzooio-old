'use strict';

module.exports = function(express, container) {

    express.get('/about', function(req, res) {
    
        res.render('about/index', {
            title: 'About'
        });
    });
};