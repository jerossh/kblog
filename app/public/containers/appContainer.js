import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions';
import { getCates } from '../actions/category';
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
        const { cates, currentCate, switchCate } = this.props;

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
        currentCate: state.posts.currentCate,
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

