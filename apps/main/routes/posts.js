'use strict';

module.exports = function(express, container) {
    
    express.get('/api/posts', function(req, res, next) {
        let page = req.query.page || 1;
        
        container.get('models.posts')
            .fetchPage({page: page, pageSize: 5})
            .then(res.serialize)
            .catch(next);
    });
    
    express.get('/api/post', function(req, res, next) {
        let permalink = req.query.permalink;
        
        container.get('models.posts')
            .fetchByPermalink(permalink)
            .then(res.serialize)
            .catch(next);
    });
};