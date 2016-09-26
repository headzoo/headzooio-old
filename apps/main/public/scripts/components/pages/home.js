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
                <small className="tagline">
                    Sean Hickey - A funkadelic coding monk on the path to engineering nirvana. Full stack web developer &amp; U.S. Marine.
                </small>
                <div className="posts">
                    {this.state.posts.map(function(post, i) {
                        return <Post key={i} post={post} summary={true} />;
                    })}
                </div>
            </section>
        )
    }
});

module.exports = HomePage;
