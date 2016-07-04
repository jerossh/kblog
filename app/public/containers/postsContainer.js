import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPost, getPosts } from '../actions';
import Posts from '../components/posts';
import NotFound from '../components/notFound';

class PostsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch, getPosts, params } = this.props;
        const cate = params.cate;
        dispatch(getPosts(cate));
    }

    render() {
        const { posts, fetchPost, status } = this.props;
        if (status == 404) {
            return <NotFound />;
        }
        return (
            <Posts posts={posts}
                getPost={fetchPost} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        status: state.posts.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts,
        dispatch,
        fetchPost: postId => {
            dispatch(getPost(postId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

