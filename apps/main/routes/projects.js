'use strict';

module.exports = function(express, container) {
    
    express.get('/projects', function(req, res) {
        
        res.render('projects/index', {
            title: 'Projects'
        });
    });
};