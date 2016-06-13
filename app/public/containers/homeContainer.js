import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';

import { getPosts } from '../actions';
import Posts from '../components/posts';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch, getPosts } = this.props;
        dispatch(getPosts());
    }

    render() {
        return (
            <Posts posts={this.props.posts} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts,
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

