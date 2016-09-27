'use strict';

module.exports = function(express, container) {
    
    let filterHTML = container.get('filter_html');
    
    express.get('/', function (req, res, next) {
        let page = parseInt(req.query.page || 1);
        if (page < 1) page = 1;
        
        container.get('models.posts')
            .fetchPage({page: page, pageSize: 5})
            .then(function(posts) {
                posts = posts.serialize();
                posts.forEach(function(post) {
                    post.content = filterHTML(post.content, true);
                });
                
                res.render('home/index', {
                    posts: posts
                });
            })
            .catch(next);
    });
};