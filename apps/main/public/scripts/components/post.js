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
                        <Moment fromNow ago>{post.published_at}</Moment>
                    </div>
                </div>
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={this.createContent(post.content)} />
                
                {this.props.summary
                ? <Link to={`/posts/${post.permalink}#read-more`}>Read More...</Link>
                : null}
            </article>
        )
    },
    
    createContent: function(html) {
        if (!html) return null;
        
        html = html.trim();
        html = html.replace(/\n\r?/g, "\n");
        html = html.replace('<!--more-->', '<div id="read-more"></div>');
        
        if (this.props.summary) {
            if (html.indexOf('<div id="read-more"></div>') !== -1) {
                html = html.split('<div id="read-more"></div>')[0];
            } else {
                html = html.split("\n")[0];
            }
        }
        
        let lines = html.split(/\n/g);
        html = lines.map(function(line) {
            line = line.trim();
            if (line.indexOf('<') !== 0) {
                line = `<p>${line}</p>`;
            }
            return line;
        }).join("\n");
        
        return {__html: html};
    }
});

module.exports = Post;
