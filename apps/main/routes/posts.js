'use strict';

module.exports = function(express, container) {
    
    express.get(/^\/posts\/(.+)/, function(req, res, next) {
        let permalink = req.params[0];
        
        container.get('models.posts')
            .fetchByPermalink(permalink)
            .then(function(post) {
                res.render('posts/index', {
                    post: post.serialize()
                });
            })
            .catch(next);
    });
};