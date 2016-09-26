'use strict';

import React       from 'react';
import Reflux      from 'reflux';
import PostActions from '../../actions/post';
import PostStore   from '../../stores/post';
import Post        from '../post';

var HomePage = React.createClass({
    mixins: [
        Reflux.connectFilter(PostStore, 'posts', function(data) {
            return data.posts;
        })
    ],
    
    componentDidMount: function() {
        PostActions.page(1);
    },
    
    render: function () {
        return (
            <section>
                <h1 className="tagline inner-content">
                    <img src="/images/avatar-tiny.png" className="avatar" />
                    Hi, I'm Sean. A funkadelic coding monk on the path to engineering nirvana. Full stack web developer and U.S. Marine.
                </h1>
                <div className="posts inner-content">
                    {this.state.posts.map(function(post, i) {
                        return <Post key={i} post={post} summary={true} />;
                    })}
                </div>
            </section>
        )
    }
});

module.exports = HomePage;
