'use strict';

module.exports = function(express, container) {
    
    express.get('/contact', function(req, res) {
        
        res.render('contact/index');
    });
};