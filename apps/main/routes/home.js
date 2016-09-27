'use strict';

module.exports = function(express, container) {
    
    express.get('/', function (req, res, next) {
        let page = parseInt(req.query.page || 1);
        if (page < 1) page = 1;
        
        container.get('models.posts')
            .fetchPage({page: page, pageSize: 5})
            .then(function(posts) {
                res.render('home/index', {
                    posts: posts.serialize()
                });
            })
            .catch(next);
    });
};