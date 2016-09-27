'use strict';

module.exports = function(express, container) {
    
    let filterHTML = container.get('filter_html');
    
    express.get(/^\/posts\/(.+)/, function(req, res, next) {
        let permalink = req.params[0];
        
        container.get('models.posts')
            .fetchByPermalink(permalink)
            .then(function(post) {
                post = post.serialize();
                post.content = filterHTML(post.content, false);
                
                res.render('posts/index', {post});
            })
            .catch(next);
    });
};