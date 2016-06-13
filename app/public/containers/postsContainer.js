import React, { Component } from 'react';
import $ from 'jquery';

import Posts from '../components/posts';

class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.req = $.get('/api/posts/${this.props.cate}')
            .done(function(data) {
                this.setState({
                    posts: data.posts
                });
            }.bind(this));
    }

    componentWillUnmount() {
        this.req.abort();
    }

    render() {
        return (
            <Posts posts={this.state.posts} />
        );
    }
}

export default PostsContainer;

