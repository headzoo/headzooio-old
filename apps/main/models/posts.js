'use strict';

module.exports = function(models, container) {
    let Posts = models.add({
        tableName: 'posts'
    });
    
    Posts.fetchByPermalink = function(permalink) {
        return Posts.where('permalink', permalink).fetch();
    }
};
