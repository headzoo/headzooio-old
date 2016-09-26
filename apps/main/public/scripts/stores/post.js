'use strict';

const Reflux      = require('reflux');
const PostActions = require('../actions/post');

module.exports = Reflux.createStore({
    listenables: [PostActions],
    data: {
        posts: [],
        post: {}
    },
    
    getInitialState: function() {
        return this.data;
    },
    
    onPageDone: function(posts) {
        this.data.posts = posts;
        this.trigger(this.data);
    },
    
    onPageFail: function(xhr) {
        console.error(xhr.responseText);
    },
    
    onFetchDone: function(post) {
        this.data.post = post;
        this.trigger(this.data);
    },
    
    onFetchFail: function(xhr) {
        console.error(xhr.responseText);
    }
});