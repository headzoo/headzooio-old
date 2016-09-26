'use strict';

import React       from 'react';
import Reflux      from 'reflux';
import PostActions from '../../actions/post';
import PostStore   from '../../stores/post';
import Post        from '../post';

const PostPage = React.createClass({
    mixins: [
        Reflux.connectFilter(PostStore, 'post', function(data) {
            return data.post;
        })
    ],
    
    componentDidMount: function() {
        PostActions.fetch(this.props.params.splat);
    },
    
    render: function () {
        return (
            <section className="inner-content">
                <Post post={this.state.post} />
            </section>
        )
    }
});

module.exports = PostPage;
