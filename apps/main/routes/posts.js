'use strict';

module.exports = function(express, container) {
    
    let posts = [
        {
            title: "Is Programming Art?",
            permalink: "2014/01/is-programming-art",
            date: "2014-01-01T12:00",
            content: "Christopher Pitt asked a simple question: Can a developer be called a creative?"
        },
        {
            title: "The Evolution of a Software Engineer",
            permalink: "2013/12/the-evolution-of-a-software-engineer",
            date: "2013-12-20T12:00",
            content: "The First Year..."
        },
        {
            title: "Slow Is Smooth; Smooth Is Fast",
            permalink: "2013/12/slow-is-smooth-smooth-is-fast",
            date: "2013-12-20T12:00",
            content: "I grew up being a big fan of horror movies. I enjoyed them all; from big blockbuster movies...\nOr to put that in more familiar words, haste makes waste. "
        }
    ];
    
    express.get('/api/posts', function(req, res) {
        
        res.json(posts);
    });
    
    express.get('/api/post', function(req, res) {
        let permalink = req.query.permalink;
        let found = null;
        posts.forEach(function(post) {
            if (post.permalink == permalink) {
                found = post;
            }
        });
        
        res.json(found);
    });
};