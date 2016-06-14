import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions';
import Posts from '../components/posts';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch, getPosts } = this.props;
        const cate = this.props.params.cate;
        dispatch(getPosts(cate));
    }

    render() {
        return (
            <Posts posts={this.props.posts} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts,
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

