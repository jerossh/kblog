import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts, getCates } from '../actions';
import Header from '../components/header';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch, getCates } = this.props;
        dispatch(getCates());
    }

    render() {
        const {
            cates,
            postTime,
            postsTime,
            postCate,
            postsCate,
            switchCate,
        } = this.props;

        let currentCate = postTime > postsTime ? postCate : postsCate;

        return (
            <div>
                <Header cates={cates}
                    currentCate={currentCate}
                    getPosts={switchCate} />
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cates: state.cates.cates,
        postTime: state.post.timeStamp,
        postsTime: state.posts.timeStamp,
        postCate: state.post.currentCate,
        postsCate: state.posts.currentCate,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCates,
        dispatch,
        switchCate: cate => {
            dispatch(getPosts(cate))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

