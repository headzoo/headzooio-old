'use strict';

import React    from 'react';
import Reflux   from 'reflux';
import { Link } from 'react-router';
import Moment   from 'react-moment';
import Icon     from 'react-afac';

const Post = React.createClass({
    propTypes: {
        post: React.PropTypes.object,
        summary: React.PropTypes.bool
    },
    
    getDefaultProps: function() {
        return {
            post: {},
            summary: false
        }
    },
    
    render: function () {
        const post = this.props.post;
        
        return (
            <article className="post">
                <div className="post-head">
                    <h2 className="post-title">
                        <Link to={`/posts/${post.permalink}`}>{post.title}</Link>
                    </h2>
                    <div className="post-date">
                        <Icon name="clock-o" />
                        <Moment fromNow ago>{post.date}</Moment>
                    </div>
                </div>
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={this.createContent(post.content)} />
                
                {this.props.summary
                ? <Link to={`/posts/${post.permalink}`}>Read More...</Link>
                : null}
            </article>
        )
    },
    
    createContent: function(html) {
        if (!html) return null;
        if (this.props.summary) {
            html = html.split("\n")[0];
        }
        
        html = ('<p>' + html.replace(/\n/g, '</p><p>'));
        
        return {__html: html};
    }
});

module.exports = Post;
