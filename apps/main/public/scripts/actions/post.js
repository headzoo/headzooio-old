'use strict';

const Reflux = require('reflux');

const PostActions = Reflux.createActions({
    page: {children: ['done', 'fail']},
    fetch: {children: ['done', 'fail']}
});

PostActions.page.listen(function(page) {
    $.ajax({
        url: '/api/posts',
        data: {page}
    }).done(this.done).fail(this.fail);
});

PostActions.fetch.listen(function(permalink) {
    $.ajax({
        url: '/api/post',
        data: {permalink}
    }).done(this.done).fail(this.fail);
});

module.exports = PostActions;