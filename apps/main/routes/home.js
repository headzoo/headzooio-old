'use strict';

module.exports = function(express, container) {
    
    express.get('/', function (req, res, next) {
        let page = parseInt(req.query.page || 1);
        if (page < 1) page = 1;
        
        container.get('models.posts')
            .fetchPage({page: page, pageSize: 3})
            .then(function(posts) {
                let pagination = posts.pagination;
                
                res.render('home/index', {
                    active: 'home',
                    posts : posts.serialize(),
                    page  : pagination.page,
                    pages : pagination.pageCount,
                    route : '/'
                });
            })
            .catch(next);
    });
};