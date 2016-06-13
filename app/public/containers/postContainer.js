import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import Post from '../components/post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        };
    }

    componentDidMount() {
        this.req = $.get(this.props.source)
            .done(function(data) {
                this.setState({
                    post: data.post
                });
            }.bind(this));
    }

    componentWillUnmount() {
        this.req.abort();
    }

    render() {
        return (
            <Post post={this.state.post} />
        );
    }
}

export default PostContainer;

