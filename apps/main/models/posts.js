'use strict';

module.exports = function(models) {
    let Posts = models.add({
        tableName: 'posts'
    });
    
    Posts.fetchByPermalink = function(permalink) {
        return Posts.where('permalink', permalink).fetch();
    }
};
