'use strict';

module.exports = function(express, container) {

    express.get('*', function(req, res, next) {
        
        // Redirect old site urls to new site urls.
        let redirects = {
            '/2013/12/01/slow-is-smooth': '/posts/2013/12/slow-is-smooth-smooth-is-fast',
            '/2013/12/30/evolution': '/posts/2013/12/the-evolution-of-a-software-engineer',
            '/2014/01/01/art': '/posts/2014/01/is-programming-art'
        };
        if (redirects[req.originalUrl] !== undefined) {
            return res.redirect(301, redirects[req.originalUrl]);
        }
        
        next();
    });
};