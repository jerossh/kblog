import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPost } from '../actions';
import Post from '../components/post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch, getPost, params } = this.props;
        const postId = params.postId;
        dispatch(getPost(postId));
    }

    render() {
        const { post } = this.props;
        return (
            <Post post={post} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost,
        dispatch,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer);

